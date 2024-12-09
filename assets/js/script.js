let aboutme = document.querySelector(".about-me");
aboutme.style.opacity = "0"; // Inicializando a opacidade para 0

function checkDisplay() {
    // Verifica a opacidade do elemento
    if (aboutme.style.opacity === "0") {
        aboutme.style.display = "none"; // Se opacidade for 0, o display fica "none"
    } else if (aboutme.style.opacity === "1") {
        aboutme.style.display = "block"; // Se opacidade for 1, o display fica "block"
    }
}

function aboutMe() {
    // Obtendo o valor atual de transform a cada vez que a função é chamada
    const aboutmetransform = getComputedStyle(aboutme).transform;
    
    // Verificando se o elemento foi movido
    const isMoved = aboutmetransform !== "matrix(1, 0, 0, 1, 0, 0)"; // Valor inicial da transformação
    const isNotMoved = aboutmetransform === "matrix(1, 0, 0, 1, 0, 0)"; // Verifica se não foi movido

    if (isMoved) {
        // Se o elemento já foi movido, mova-o de volta para a posição inicial
        aboutme.style.transform = "translateY(0px)";
        aboutme.style.opacity = "1"; // Aumenta a opacidade para mostrar o elemento
    } else if (isNotMoved) {
        // Se o elemento não foi movido, mova-o para baixo e diminua a opacidade
        aboutme.style.transform = "translateY(1700px)";
        aboutme.style.opacity = "0"; // Diminui a opacidade para esconder o elemento
    }
}

// Chama a função sobre o intervalo para verificar o estado do display
setInterval(checkDisplay, 50); // Checa a cada 300ms
