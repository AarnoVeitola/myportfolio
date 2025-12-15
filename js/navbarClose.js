$(document).ready(function () {
  $('.navbar-nav .nav-link').on('click', function () {
    if ($('.navbar-toggler').is(':visible')) {
      // Only close on small screens
      $('.navbar-collapse').collapse('hide');
    }
  });
});
