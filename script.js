document.addEventListener("DOMContentLoaded", function () {
    const aumentarFonte = document.getElementById("aumentar-fonte");
    const diminuirFonte = document.getElementById("diminuir-fonte");
    const elementos = document.querySelectorAll("p, h1, h2, h3"); // Seleciona os textos
    
    let tamanhoFonteAtual = 16; // Define o tamanho inicial da fonte em pixels
    
    aumentarFonte.addEventListener("click", function () {
    tamanhoFonteAtual += 2;
    elementos.forEach(el => el.style.fontSize = tamanhoFonteAtual + "px");
    });
    
    diminuirFonte.addEventListener("click", function () {
    if (tamanhoFonteAtual > 10) { // Evita que a fonte fique muito pequena
    tamanhoFonteAtual -= 2;
    elementos.forEach(el => el.style.fontSize = tamanhoFonteAtual + "px");
    }
    });
    });