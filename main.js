function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll ('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const tecla = lista[Contador];
    const classe = lista[Contador].classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    lista[Contador].onclick = function() {
    TocaSomPom(idSom);
}

    Contador = Contador + 1;

    //console.log(Contador);

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
        console.log(evento);
    } 

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}




