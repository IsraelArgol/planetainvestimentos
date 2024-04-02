document.getElementById("nextBtn").addEventListener("click", function() {
    // Encontrar o swiper atual
    var swiper = document.querySelector('.swiper-container').swiper;
    // Avançar para o próximo slide
    swiper.slideNext();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    // Encontrar o swiper atual
    var swiper = document.querySelector('.swiper-container').swiper;
    // Voltar para o slide anterior
    swiper.slidePrev();
});
