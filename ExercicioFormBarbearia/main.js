


function mudaCorIcon1(){
    let elemendoIcon1 = document.getElementById('icone1');
    elemendoIcon1.classList.add("mudaCorIcon")
    let elementoDiv1 = document.getElementById("divCaixa1")
    elementoDiv1.classList.add("addBorda") 
}

function mudaCorIcon2(){
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

window.onload = () =>{
    document.getElementById('emailC').onfocus = mudaCorIcon1;
    document.getElementById('emailC').onblur = perdeCorIcon1;
    document.getElementById('senhaC').onfocus = mudaCorIcon2;
    document.getElementById('senhaC').onblur = perdeCorIcon2;
}