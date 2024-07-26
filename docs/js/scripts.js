document.addEventListener('DOMContentLoaded', () => {
    // Handle click to expand education sections
    const educationSections = document.querySelectorAll('.education-section');
    
    educationSections.forEach(section => {
        section.querySelector('.education-main').addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });

    // Handle scroll fade-in effect
    // Scroll fade-in and fade-out effect
    const sections = document.querySelectorAll('.section');

    const options = {
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
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Toggle dark and light mode
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM fully loaded and parsed');
    
        // Lightbox functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.close');
        const images = document.querySelectorAll('.clickable-image');
    
        console.log('Images found:', images.length);
    
        images.forEach(image => {
            image.addEventListener('click', () => {
                console.log('Image clicked:', image.src);
                lightbox.style.display = 'block';
                lightboxImg.src = image.src;
            });
        });
    
        closeBtn.addEventListener('click', () => {
            console.log('Close button clicked');
            lightbox.style.display = 'none';
        });
    
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                console.log('Lightbox background clicked');
                lightbox.style.display = 'none';
            }
        });
    });
    
});
