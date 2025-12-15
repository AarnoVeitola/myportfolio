$(document).ready(function () {
  $('.navbar-nav .nav-link').on('click', function (event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      let navbarHeight = $('.navbar').outerHeight(); // Get navbar height dynamically

      $('html, body').animate(
        { scrollTop: target.offset().top - navbarHeight - 10 }, // Adjust offset
        600 // Smooth scrolling duration (600ms)
      );
    }

    // Close the navbar on small screens
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
});
