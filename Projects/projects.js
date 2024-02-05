// projects.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        duration: 1000, // Animation duration in milliseconds
        reset: true, // Reveal elements every time as you scroll
    });

    // Define the elements you want to reveal
    const projects = document.querySelectorAll('.project');

    // Add the reveal effect to each project element
    projects.forEach((project, index) => {
        sr.reveal(project, {
            delay: index * 200, // Delay the reveal of each project
            origin: 'bottom', // Animation starts from the bottom
            distance: '50px', // Distance of animation
        });
    });
});
