function tocaSomPom(){
    document. querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = Document.querySelectorAll('.tecla');

listaDeBotoes[0].onclick = tocaSomPom;
