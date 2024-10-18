document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menubtn');
    const menu = document.getElementById('menu');
    const mIcon = document.getElementById('micon');
    const buttons = document.querySelectorAll('.butt button');
    
    // Toggle menu for mobile devices
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('dis');
        if (menu.classList.contains('dis')) {
            mIcon.classList.remove('bi-list');
            mIcon.classList.add('bi-x-lg');
        } else {
            mIcon.classList.remove('bi-x-lg');
            mIcon.classList.add('bi-list');
        }
    });

    // Image switching functionality
    const images = [
        'url("./assets/images/cat1.png")',
        'url("./assets/images/cat2.png")',
        'url("./assets/images/cat3.png")',
        'url("./assets/images/cat4.png")'
    ];

    let currentIndex = 0;

    function updateSlider(index) {
        header.style.background = images[index] + ' no-repeat center center/cover';
        buttons.forEach(btn => {
            btn.style.background = '#fff';
            btn.style.transform = 'scale(1)';
        });
        buttons[index].style.background = '#fff';
        buttons[index].style.transform = 'scale(1.5)'; // Make active dot bigger
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    // Automatic slider functionality
    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    }

    // Set interval for automatic sliding (change image every 5 seconds)
    const slideInterval = setInterval(autoSlide, 5000);

    // Pause automatic sliding when hovering over the header
    header.addEventListener('mouseenter', () => clearInterval(slideInterval));
    header.addEventListener('mouseleave', () => setInterval(autoSlide, 5000));

    // Set initial active button and background
    updateSlider(currentIndex);
});