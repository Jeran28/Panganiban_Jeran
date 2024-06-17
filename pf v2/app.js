window.addEventListener('scroll', function() {
    // var navbar = document.getElementById('navbar');
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu(){
    const links = document.querySelectorAll(".nav-link");
    const navButton = document.querySelector(".navbar-toggler");

    for(let i=0; i < links.length - 1; i++){
        links[i].addEventListener("click", function(){
            navButton.click();      
        });
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const projectContents = document.querySelectorAll("#projects-content");
    const educationContent = document.querySelectorAll(".resume-item");
    const skillsContent = document.querySelectorAll(".skills-box");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    projectContents.forEach(content =>  {
        observer.observe(content);
    });

    educationContent.forEach(item =>  {
        observer.observe(item);
    });

    skillsContent.forEach(item =>  {
        observer.observe(item);
    });
});

  

        document.addEventListener('DOMContentLoaded', () => {
            const toggleButton = document.querySelector('.toggleBtn');
            const body = document.body;
            const navbar = document.querySelector(".navbar");
            const vidBg = document.getElementById("bg-video");
            const educationContent = document.querySelectorAll(".resume-item");
            const skillsContent = document.querySelectorAll(".skills-box");

            // Check local storage for theme preference
            // if (localStorage.getItem('theme') === 'light') {
            //     body.classList.add('light-mode');
            // }
    
            toggleButton.addEventListener('click', () => {
                body.classList.toggle('light-mode');
                navbar.classList.toggle('light-mode');
                vidBg.classList.toggle("hidden")
                toggleButton.classList.toggle('toggled');
                const projectContents = document.querySelectorAll("#projects-content");
                const contact = document.getElementById("contact-content");
                const allAnchors = document.querySelectorAll("a");
                const allLogos = document.querySelectorAll("i");

                educationContent.forEach(content => {
                    console.log(content);
                    content.classList.toggle("light-mode");
                });

                skillsContent.forEach(content => {
                    console.log(content);
                    content.classList.toggle("light-mode");
                });

                projectContents.forEach(content => {
                    console.log(content);
                    content.classList.toggle("light-mode");
                });

                contact.classList.toggle("light-mode");

                allAnchors.forEach(content => {
                    console.log(content);
                    content.classList.toggle("light-mode");
                });

                allLogos.forEach(content => {
                    console.log(content);
                    content.classList.toggle("light-mode");
                });

                // Save preference to local storage
                if (body.classList.contains('light-mode')) {
                    localStorage.setItem('theme', 'light');
                } else {
                    localStorage.removeItem('theme');
                }
            });
        });
    



 