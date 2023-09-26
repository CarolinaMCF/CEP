function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll ('.tecla');

let Contador = 0;

while (Contador < ListaDeSons.length) {
    const classe = ListaDeSons[Contador].classList[1];
//console.log(classe);

    const idSom = `#som_${classe}`;
//console.log(idSom);

    ListaDeSons[Contador].onclick = function() {
    tocar(idSom);
}

    Contador = Contador + 1;

//console.log(Contador);
}




