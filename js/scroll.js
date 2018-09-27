document.addEventListener("DOMContentLoaded", function () {

let sections = galleryUl.querySelectorAll(".section");

    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
        // do something with the scroll position
    }

    window.addEventListener('scroll', function(e) {

        last_known_scroll_position = window.scrollY;

        if (!ticking) {

            window.requestAnimationFrame(function() {
                doSomething(last_known_scroll_position);
                ticking = false;
            });

            ticking = true;

        }

    });

}