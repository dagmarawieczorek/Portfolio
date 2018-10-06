import header from "./header";
import scroll from "./scroll";
// import gif from "./showgif";


$(function () {

    header();
    scroll();
    // gif();

    let gifVisible = false;
    let overlay = document.querySelector('.project-box-image-overlay');
    const box = document.querySelector('.project-box-frame');
    let img = document.getElementById("foodPlannerImg");

    box.addEventListener("click", function () {
        gifVisible = !gifVisible;

        $(overlay).toggleClass("hidden");
        $(img).attr("src", gifVisible? "https://github.com/dagmarawieczorek/FoodPlannerApp/blob/master/images/gif-test-4.gif?raw=true":"images/foodplanner.png");

    });




    $(document).ready(function(){
        $('.project-slides').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 2
    });
    });

});