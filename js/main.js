const NAVBAR_SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET_PX = 10;
const FADE_SCROLL_THRESHOLD = 0.3;

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
  initFadeScroll();
  initNavbarShadow();
  initAnchorNavigation();
  initAboutToggleGuard();
  initAboutToggleAccessibility();
}

revealPageWhenFontsAreReady();

document.addEventListener('DOMContentLoaded', init);
