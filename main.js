function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll ('.tecla');

let Contador = 0;

const classe = ListaDeSons[5].classList[1];
console.log(classe);


while (Contador < ListaDeSons.length) {
    ListaDeSons[Contador].onclick = function() {TocaSomPom('#som_tecla_pom');}
    Contador = Contador + 1;
    console.log(Contador);
}




