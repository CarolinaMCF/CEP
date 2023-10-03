function tocar (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll ('.tecla');

for (let Contador = 0; Contador < lista.length; Contador++;){
    const tecla = lista[Contador];
    const classe = tecla.classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    lista[Contador].onclick = function() {
    tocar(idSom);
}

    //console.log(Contador);

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        //console.log(evento.code === 'Space' || evento.code === 'Enter'); 
        }   
    } 

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}




