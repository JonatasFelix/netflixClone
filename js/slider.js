
var el = document.getElementById('scrow');
var botoes = document.querySelectorAll('button');
var voltar = botoes[0];
var avancar = botoes[1];

function mover(direcao) {
el.scrollLeft += 450 * direcao;
var inicio = el.scrollLeft == 0;
var fim = el.clientWidth + el.scrollLeft - el.scrollWidth;
voltar.style.opacity = inicio ? 0 : 1;
avancar.style.opacity = fim ? 1 : 0;
}
