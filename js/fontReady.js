if (document.fonts) {
  document.fonts.ready.then(function () {
    document.documentElement.style.visibility = 'visible';
  });
} else {
  // Fallback for browsers that don't support the Font Loading API:
  window.onload = function () {
    document.documentElement.style.visibility = 'visible';
  };
}
