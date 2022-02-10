


function mudaCorIcon1() {
    let elemendoIcon1 = document.getElementById('icone1');
    elemendoIcon1.classList.add("mudaCorIcon")
    let elementoDiv1 = document.getElementById("divCaixa1")
    elementoDiv1.classList.add("addBorda")
}

function mudaCorIcon2() {
    let elemendoIcon2 = document.getElementById('icone2');
    elemendoIcon2.classList.add("mudaCorIcon")
    let elementoDiv2 = document.getElementById("divCaixa2")
    elementoDiv2.classList.add("addBorda")
}

function perdeCorIcon1() {
    let elemendoIcon1 = document.getElementById('icone1');
    elemendoIcon1.classList.remove('mudaCorIcon')
    let elementoDiv1 = document.getElementById("divCaixa1")
    elementoDiv1.classList.remove("addBorda")

}
function perdeCorIcon2() {
    let elemendoIcon2 = document.getElementById('icone2');
    elemendoIcon2.classList.remove('mudaCorIcon')
    let elementoDiv2 = document.getElementById("divCaixa2")
    elementoDiv2.classList.remove("addBorda")

}

window.onload = () => {
    document.getElementById('emailC').onfocus = mudaCorIcon1;
    document.getElementById('emailC').onblur = perdeCorIcon1;
    document.getElementById('senhaC').onfocus = mudaCorIcon2;
    document.getElementById('senhaC').onblur = perdeCorIcon2;
    document.getElementById('formEntra').onsubmit = evento => apareceBalao(evento);
}

function apareceBalao(event) {
    event.preventDefault();
    if(document.getElementById("balao") == null){
    // console.log('entrou')
    let balao = document.createElement('div')
    balao.classList.add('balao')
    balao.id =('balao')
    // balao.getElementById('') = 'divona'
    let conteudoNovo = `<div class ="exclamacao">
    <i class="fa-solid fa-circle-exclamation"></i>
    </div>
    <div class="textoBalao">
    <h4> Erro na autenticação</h4> 
    <span>occoreu um  erro fazer login cheque as credencias</span>
    </div>
    <div class="botaoFecha">
    <i id="btnFecha" onclick="fechaBalao()" class="fa-regular fa-circle-xmark"></i>
    </div>
    `
    balao.innerHTML += conteudoNovo
    document.body.insertBefore(balao, barraLateral);
} else{
    document.getElementById("balao").style.display = 'flex'
    setTimeout(()=> document.getElementById("balao").style.animation= "apareceBalao 2s;" )
}

    // console.log('saiu')

}

function fechaBalao() {
    document.getElementById("balao").style.display = 'none'
    console.log('entrou')

}