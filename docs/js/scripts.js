document.addEventListener('DOMContentLoaded', () => {
    // Handle click to expand education sections
    const educationSections = document.querySelectorAll('.education-section');
    
    educationSections.forEach(section => {
        section.querySelector('.education-main').addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });

    // Handle scroll fade-in effect
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once the animation has been triggered
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
