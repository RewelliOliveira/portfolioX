const images = document.querySelectorAll('.q1');
const angles = [0, 0, 0, 0]; // Inicializa os ângulos para cada imagem

function rotateImage(image, index) {
    angles[index] += 1; // Altere este valor para ajustar a velocidade da rotação
    image.style.transform = `rotate(${angles[index]}deg)`;
}

images.forEach((image, index) => {
    setInterval(() => rotateImage(image, index), 16); // Roda a função a cada 16ms (~60 fps)
});

// script.js
document.addEventListener('scroll', function() {
    var hiddenContainer = document.getElementById('hiddenContainer');
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Ajuste esse valor conforme necessário para determinar quando mostrar o container
    if (scrollPosition > 200) {
        hiddenContainer.classList.add('show');
    } else {
        hiddenContainer.classList.remove('show');
    }
});



