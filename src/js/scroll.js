function scroll() {
    const skills = document.querySelectorAll('.skills-container li');
    let i = 0;

    function displaySkills() {

        for (let i = 0; i <skills.length ; i++) {
            skills[i].classList.add('skill-box');
        }



    }

    window.addEventListener('scroll', function (e) {


        if (window.scrollY > 100) {


            setTimeout(displaySkills, 2000);

        }
    });

}

export default scroll;