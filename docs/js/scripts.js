document.addEventListener('DOMContentLoaded', () => {
    const educationSections = document.querySelectorAll('.education-section');

    educationSections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });
});