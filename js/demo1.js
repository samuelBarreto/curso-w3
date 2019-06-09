let botao = document.querySelector("#botao");
let batao1 = document.querySelector("#botao1");
let pg = document.querySelector("body");
let txt = document.querySelector("#botao1");
/** evento do button*/

function r () {
    pg.style.backgroundColor = "red";
}
function b (){
    pg.style.backgroundColor = "blue";
    txt.innerHTML = "azul"
} 
botao.onclick = r;
botao1.onclick = b;