function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll ('.tecla');

ListaDeSons[0].onclick = TocaSomPom;


