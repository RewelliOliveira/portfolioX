const images = document.querySelectorAll('.q1');
const angles = [0, 0, 0, 0]; // Inicializa os ângulos para cada imagem

function rotateImage(image, index) {
    angles[index] += 1; // Altere este valor para ajustar a velocidade da rotação
    image.style.transform = `rotate(${angles[index]}deg)`;
}

images.forEach((image, index) => {
    setInterval(() => rotateImage(image, index), 16); // Roda a função a cada 16ms (~60 fps)
});

var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container-cards-projetos');

btn.addEventListener('click', function() {
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth' });
    }
});


