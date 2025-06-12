//definir variavel
let segundos =0
let intervalo= null
//elementos do DOM para manipulação
const display = document.getElementById("display")
const startBtn = document.getElementById("StartBtn")
const pauseBtn= document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")
//botao start
startBtn.addEventListener("click",iniciarCronometro)
//botao pausa
pauseBtn.addEventListener("click",pausarCronometro)
//botao reset
resetBtn.addEventListener("click",resetarCronometro)
//função iniciar
function iniciarCronometro(){
if(intervalo) return;
//evita que existam mulltiplos intervalos
intervalo = setInterval(()=> {
    segundos++
    atualizaDisplay();
},1000)
}
//função pausar
function pausarCronometro(){
    clearInterval(intervalo)
    intervalo=null

}
//função resetar

function resetarCronometro(){
    pausarCronometro()
    segundos=0
    atualizaDisplay()

}
//formatar tempo
function formatarTempo(segundosTotais){
const minutos = Math.floor(segundosTotais/60);
const segundos = segundosTotais % 60;

return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`


 

}
//funcao que envia o tempo para a pagina
function atualizaDisplay(){
    display.textContent= formatarTempo(segundos)
}