function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll ('.tecla');

let Contador = 0;

while (Contador < ListaDeSons.length) {
    const tecla = lista[contador]
    const classe = ListaDeSons[Contador].classList[1];
    console.log(classe);

    const idSom = `#som_${classe}`;
    console.log(idSom);

    ListaDeSons[Contador].onclick = function() {
    TocaSomPom(idSom);
}

    Contador = Contador + 1;

    console.log(Contador);

    tecla.classList.add('ativa');
    tecla.classList.remove('ativa');
}




