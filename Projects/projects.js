
document.addEventListener('DOMContentLoaded', function () {
   
    const sr = ScrollReveal({
        duration: 1000, 
        reset: true,
    });

    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        sr.reveal(project, {
            delay: index * 200, 
            origin: 'bottom', 
            distance: '50px', 
        });
    });
});
