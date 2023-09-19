function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll ('.tecla');

let Contador = 0;

while (Contador < ListaDeSons.length) {
    ListaDeSons[Contador].onclick = function() {
    TocaSomPom('#som_tecla_pom');}

    const classe = ListaDeSons[Contador].classList[1];
    
    console.log(classe);
    
    Contador = Contador + 1;


    console.log(Contador);
}




