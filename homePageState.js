document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-container img');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});



