function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll ('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const tecla = lista[contador];
    const classe = lista[Contador].classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    lista[Contador].onclick = function() {
    TocaSomPom(idSom);
}

    Contador = Contador + 1;

    //console.log(Contador);

    tecla.classList.add('ativa');
    tecla.classList.remove('ativa');
}




