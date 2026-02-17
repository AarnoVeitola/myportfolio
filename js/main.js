const NAVBAR_SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET_PX = 10;
const FADE_SCROLL_THRESHOLD = 0.3;

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sanitizeUrl(url) {
  const value = String(url ?? '').trim();
  if (!value) {
    return '#';
  }

  const isSafePath =
    value.startsWith('/') ||
    value.startsWith('./') ||
    value.startsWith('../') ||
    value.startsWith('#') ||
    value.startsWith('assets/') ||
    value.startsWith('images/');

  if (isSafePath) {
    return value;
  }

  try {
    const parsed = new URL(value, window.location.origin);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return value;
    }
  } catch {
    return '#';
  }

  return '#';
}

function renderHtml(containerId, html) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = html;
}

function buildNavLinksHtml(links) {
  return links
    .map(
      (link) => `
        <li class="nav-item">
          <a class="nav-link" href="${escapeHtml(sanitizeUrl(link.href))}">${escapeHtml(link.label)}</a>
        </li>
      `
    )
    .join('');
}

function buildSocialLinkHtml(link) {
  const href = escapeHtml(sanitizeUrl(link.href));
  const icon = escapeHtml(link.icon);
  const label = escapeHtml(link.label);

  return `
    <a
      class="btn btn-outline-light btn-floating m-1"
      target="_blank"
      rel="noopener noreferrer"
      href="${href}"
      aria-label="${label}"
    >
      <i class="fa fa-xl fa-${icon}" aria-hidden="true"></i>
    </a>
  `;
}

function buildSidebarSocialHtml(links) {
  const rows = new Map();

  links.forEach((link) => {
    const rowIndex = Number.isInteger(link.sidebarRow) ? link.sidebarRow : 1;
    const rowLinks = rows.get(rowIndex) || [];
    rowLinks.push(link);
    rows.set(rowIndex, rowLinks);
  });

  return Array.from(rows.entries())
    .sort(([a], [b]) => a - b)
    .map(
      ([, rowLinks]) =>
        `<div class="social-row">${rowLinks.map(buildSocialLinkHtml).join('')}</div>`
    )
    .join('');
}

function buildModalSocialHtml(links) {
  return links.map(buildSocialLinkHtml).join('');
}

function buildLinkHtml(link) {
  const href = escapeHtml(sanitizeUrl(link.href));
  const label = escapeHtml(link.label);
  const isExternal = Boolean(link.external);

  return `
    <a
      href="${href}"
      ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}
      class="external-link"
    >
      ${label}
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function buildParagraphsHtml(paragraphs) {
  return asArray(paragraphs)
    .map((paragraph) => `<p class="text-block">${escapeHtml(paragraph)}</p>`)
    .join('');
}

function buildPeriodsHtml(periods) {
  return asArray(periods)
    .map((period) => {
      const role = period.role
        ? `<h4 class="position-title">${escapeHtml(period.role)}</h4>`
        : '';
      const duration = period.duration
        ? `<p class="position-duration">${escapeHtml(period.duration)}</p>`
        : '';

      return `${role}${duration}${buildParagraphsHtml(period.paragraphs)}`;
    })
    .join('');
}

function buildEntryTextHtml(entry) {
  const title = entry.title ? `<h3>${escapeHtml(entry.title)}</h3>` : '';
  const periodsHtml = buildPeriodsHtml(entry.periods);
  const paragraphsHtml = buildParagraphsHtml(entry.paragraphs);
  const linksHtml = asArray(entry.links).map(buildLinkHtml).join('');

  return `${title}${periodsHtml}${paragraphsHtml}${linksHtml}`;
}

function buildEntryImageHtml(entry) {
  if (entry.image && entry.image.src) {
    const src = escapeHtml(sanitizeUrl(entry.image.src));
    const alt = escapeHtml(entry.image.alt);
    const imageClass = escapeHtml(entry.image.className || 'position-image');

    return `
      <img
        src="${src}"
        class="${imageClass}"
        alt="${alt}"
        loading="lazy"
      />
    `;
  }

  return `
    <div class="position-image-placeholder" aria-hidden="true">
      ${escapeHtml(entry.imagePlaceholder || 'Image coming soon')}
    </div>
  `;
}

function buildEntriesHtml(entries) {
  return entries
    .map((entry) => {
      const directionClass = entry.reverse ? ' content-block-right' : '';

      return `
        <div class="position fade-scroll" data-entry-id="${escapeHtml(entry.id)}">
          <div class="content-block${directionClass}">
            <div class="content-section">
              ${buildEntryTextHtml(entry)}
            </div>
            <div class="content-section">
              <div class="position-image-container">
                ${buildEntryImageHtml(entry)}
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderContentFromData() {
  const portfolioData = window.PORTFOLIO_DATA || {};
  const navLinks = asArray(portfolioData.navLinks);
  const socialLinks = asArray(portfolioData.socialLinks);

  const navLinksHtml = buildNavLinksHtml(navLinks);
  renderHtml('navbarLinks', navLinksHtml);
  renderHtml('sidebarLinks', navLinksHtml);
  renderHtml('sidebarSocialLinks', buildSidebarSocialHtml(socialLinks));
  renderHtml('modalSocialLinks', buildModalSocialHtml(socialLinks));
  renderHtml(
    'backgroundEntries',
    buildEntriesHtml(asArray(portfolioData.backgroundEntries))
  );
  renderHtml(
    'projectEntries',
    buildEntriesHtml(asArray(portfolioData.projectEntries))
  );
}

function revealPage() {
  document.documentElement.style.visibility = 'visible';
}

function revealPageWhenFontsAreReady() {
  const FONT_LOAD_TIMEOUT_MS = 2000;

  if (document.fonts && document.fonts.ready) {
    const timeout = new Promise((resolve) => {
      window.setTimeout(resolve, FONT_LOAD_TIMEOUT_MS);
    });

    Promise.race([document.fonts.ready, timeout]).then(revealPage, revealPage);
    return;
  }

  window.addEventListener('load', revealPage, { once: true });
  window.setTimeout(revealPage, FONT_LOAD_TIMEOUT_MS);
}

function userPrefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initFadeScroll() {
  const elements = document.querySelectorAll('.fade-scroll');
  if (!elements.length) {
    return;
  }

  if (userPrefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach((element) => {
      element.classList.add('visible');
      element.classList.remove('hidden');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
        entry.target.classList.toggle('hidden', !entry.isIntersecting);
      });
    },
    { threshold: FADE_SCROLL_THRESHOLD }
  );

  elements.forEach((element) => observer.observe(element));
}

function initNavbarShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) {
    return;
  }

  const updateShadowState = () => {
    navbar.classList.toggle(
      'scrolled',
      window.scrollY > NAVBAR_SCROLL_THRESHOLD
    );
  };

  updateShadowState();
  window.addEventListener('scroll', updateShadowState, { passive: true });
}

function isMobileNavbarVisible() {
  const toggler = document.querySelector('.navbar-toggler');
  if (!toggler) {
    return false;
  }

  return window.getComputedStyle(toggler).display !== 'none';
}

function closeMobileNavbar() {
  const collapseElement = document.querySelector('.navbar-collapse');
  if (!collapseElement || !collapseElement.classList.contains('show')) {
    return;
  }

  const $ = window.jQuery;
  if ($ && typeof $(collapseElement).collapse === 'function') {
    $(collapseElement).collapse('hide');
    return;
  }

  collapseElement.classList.remove('show');
}

function getNavbarOffset() {
  const navbar = document.querySelector('.navbar');
  if (!navbar || window.getComputedStyle(navbar).display === 'none') {
    return 0;
  }

  return navbar.getBoundingClientRect().height;
}

function initAnchorNavigation() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('.nav-link[href^="#"]');
    if (!link) {
      return;
    }

    const targetSelector = link.getAttribute('href');
    if (!targetSelector || targetSelector === '#') {
      return;
    }

    const target = document.querySelector(targetSelector);
    if (!target) {
      return;
    }

    event.preventDefault();

    const targetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      getNavbarOffset() -
      SCROLL_OFFSET_PX;

    window.scrollTo({
      top: Math.max(targetY, 0),
      behavior: userPrefersReducedMotion() ? 'auto' : 'smooth',
    });

    if (isMobileNavbarVisible()) {
      closeMobileNavbar();
    }
  });
}

function initAboutToggleGuard() {
  const toggleButtons = document.querySelectorAll('.toggle-btn[data-target]');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const targetSelector = button.getAttribute('data-target');
      if (!targetSelector) {
        return;
      }

      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      if (target.classList.contains('show')) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });
}

function syncAboutButtonExpandedState(section) {
  if (!section || !section.id) {
    return;
  }

  const isExpanded = section.classList.contains('show');
  const selectors = `.toggle-btn[data-target="#${section.id}"]`;

  document.querySelectorAll(selectors).forEach((button) => {
    button.setAttribute('aria-expanded', String(isExpanded));
  });
}

function initAboutToggleAccessibility() {
  const sections = document.querySelectorAll('#about .collapse');
  sections.forEach((section) => syncAboutButtonExpandedState(section));

  const $ = window.jQuery;
  if (!$) {
    return;
  }

  $('#about .collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
    syncAboutButtonExpandedState(this);
  });
}

function init() {
  renderContentFromData();
  initFadeScroll();
  initNavbarShadow();
  initAnchorNavigation();
  initAboutToggleGuard();
  initAboutToggleAccessibility();
}

revealPageWhenFontsAreReady();

document.addEventListener('DOMContentLoaded', init);
