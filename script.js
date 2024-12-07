document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider .slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Pindah slide setiap 3 detik
    showSlide(currentSlide); // Tampilkan slide pertama saat load
});
