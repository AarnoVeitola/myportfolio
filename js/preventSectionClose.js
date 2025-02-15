$(document).ready(function () {
    $(".toggle-btn").on("click", function (event) {
        let targetSelector = $(this).attr("data-target");
        let target = $(targetSelector);
        console.log(target);

        if (target.hasClass("show") && targetSelector !== "#navbarContent") {
            event.stopPropagation()
            event.preventDefault();
            console.log("Prevented collapse from closing.");
        }
    });
});