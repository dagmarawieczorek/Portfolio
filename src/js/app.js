import header from "./header";
import scroll from "./scroll";
// import gif from "./showgif";



$(function() {

    header();
    scroll();
    // gif();

    const overlay = document.querySelector('.project-box-image-overlay');
    const $frame= $(".project-box-image")
    const box = document.querySelector('.project-box-image-overlay');
    let img = document.querySelector(".project-box-image img");
    // console.log(img);

     overlay.addEventListener("click", function(){

   $(this).toggleClass("hidden");

   // $img.attr('src','https://github.com/dagmarawieczorek/FoodPlannerApp/blob/master/images/gif-test-4.gif');

    })

});