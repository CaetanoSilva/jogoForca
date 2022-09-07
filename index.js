var exibir = document.querySelector('#tabuleiroInput');
/* Funcao Tabuleiro do Jogo 
<canvas width="1200" height="800"></canvas>*/
function tabuleiroJogo(x,y) {
    var canvas = document.getElementById('canvas');
    var pincel = convas.getContext('2d');
    pincel.fillStyle='black';
    pincel.beginPath();
    pincel.moveTo(0, 0);
    pincel.lineTo(x, y);
    exibir.innerHTML;
}
tabuleiroJogo(1,9);

