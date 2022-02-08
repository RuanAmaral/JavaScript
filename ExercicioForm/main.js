let baseFalsa = []
let id = -1

document.getElementById("formEntra").style.display = 'none'
document.getElementById("formCadastra").style.display = 'none'

function entra(event) {
    event.preventDefault();
    let email = document.getElementById("emailEntra").value;
    let senha = document.getElementById("senhaEntra").value;

    let emailVerify = baseFalsa.find((elemento) => {
        if (elemento.email === email) {
            return elemento.email;
        }
    })
    let senhaVerify = baseFalsa.find((elemento) => {
        if (elemento.email === email) {
            return elemento.senha;
        }
    })


    if (baseFalsa.length === 0) {
        alert("O meu nobre não tem niguém cadastrado")
        return
    } else
        if (email == emailVerify.email && senhaVerify.senha == senha) {
            alert("Você entrou");
        } else {
            alert("Seu login ou senha estão errados")
        }
}

function cadastra(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value
    let email1 = document.getElementById("emailCadastra").value
    let senha = document.getElementById("senhaCadastra").value
    let confirmasenha = document.getElementById("senhaConfirma").value


    let emails = baseFalsa.map(function (cadastro) {
        return cadastro.email
    })



    if (senha !== confirmasenha) {
        alert("senha tá diferente da confirmação")
        return
    } else if (senha === "") {
        alert("O amigão digita a senha por favor")
        return
    } else if (emails.includes(email1)) {
        alert("O meu nobre, esse email tá cadastrado já, dá pra cadastrar de novo não");
        return
    } else {
        id += 1
        baseFalsa.push({
            id: id,
            nome: nome,
            email: email1,
            senha: senha
        })


        let cadastros2 = document.getElementById("cadastroGeral");

        let newHtml2 = `<div id ="cadastro${id}"><li name ="${id}" id="${id}${email1}" >${nome}</li><li name ="${id}">${email1}<button type="button" id ="${id}" name ="editar" onclick="editar(${id})">editar</button>
        <button type="button" id ="${id}" name ="apagar" onclick="apagarRegistro(${id})">deletar</button>
        </li></div>`
        cadastros2.innerHTML += newHtml2
        // let cadastros = document.getElementById("cadastroGeral");
        //coisa antiga não usada
        // let newHtml = '<li id="'+email1+'">'+email1+'</li>'
        // let newHtml = `<li name ="${id}">${email1}<button type="button" id ="${id}" name ="editar" onclick="editar(${id})">editar</button>
        // <button type="button" id ="${id}" name ="apagar" onclick="apagarRegistro(${id})">deletar</button>
        // </li></div>`
        // cadastros.innerHTML += newHtml

        alert("cadastrou")
        document.getElementById("nome").value = '';
        document.getElementById("emailCadastra").value = '';
        document.getElementById("senhaCadastra").value = '';
        document.getElementById("senhaConfirma").value = '';
        return;
    }




}

window.onload = () => {
    document.getElementById("formEntra").onsubmit = evento => entra(evento);
    document.getElementById("formCadastra").onsubmit = evento => cadastra(evento);
    document.getElementById("btnEntrar").onclick = mostraEntrar;
    document.getElementById("btnCadastrar").onclick = mostraCadastra;
    
}



function editar(id) {

    let cadastroEtditavel = baseFalsa.filter((cadastro) => {
        if (cadastro.id == id) {
            return cadastro;
        }
    })

    idNome = cadastroEtditavel[0].id + cadastroEtditavel.emailS


    let nomeNoEditor = cadastroEtditavel[0].nome
    let emailNoEditor = cadastroEtditavel[0].email
    let senhaPassword = cadastroEtditavel[0].senha


    
    let espacoEditor = document.getElementById(`cadastrao`)
    let htmlEditor = `<div id ="editorzao">
    </button><label name="editor">Nome</label>
    <input name="editor" type="text" id=novoNome value=${nomeNoEditor}>
    <label name="editor">Email</label> <label name="editor">${emailNoEditor}</label>
    <label name="editor">nova senha</label>
    <input name="editor" type="password" id="novaSenha" value="${senhaPassword}"><label name="editor">Confirme a nova senha</label>
    <input name="editor" value="${senhaPassword}" id="confirmaNovaSenha" type="password">
    <button type="button"  name="editor"class="botao3" id="btnSalvar">Salvar</button>
    </div>`
    
    
    espacoEditor.innerHTML = htmlEditor
    
    // document.getElementById("cadastrao").setAttribute("disabled", "disabled");

    document.getElementById("btnSalvar").onclick = () => {
        setTimeout(() => {
            salvarEdicao(id)
        }, 200);
    }


}

function salvarEdicao(id) {
    let valorAntigo = baseFalsa[id];

    
    let novoNome = document.getElementById("novoNome").value
    let novaSenha = document.getElementById("novaSenha").value
    let confirmaNovaSenha = document.getElementById("confirmaNovaSenha").value
        if (valorAntigo.nome != novoNome) {
            valorAntigo.nome = novoNome
        }

        if (valorAntigo.senha != novaSenha && novaSenha === confirmaNovaSenha) {
            valorAntigo.senha = novaSenha
        } else if (novaSenha != confirmaNovaSenha) {
            alert("A Nova Senha Tá diferente da confirmação")
            return
        } else if (novaSenha == "") {
            alert("A senha ta vazia")
            return
        }
        // document.getElementById(id).setAttribute("enable", "enable")
        // document.getElementById(id).style.display = 'block'
       

        if (valorAntigo.senha == novaSenha && valorAntigo.nome == novoNome) {
            baseFalsa[id].senha = valorAntigo.senha;
            baseFalsa[id].nome = valorAntigo.nome;
            document.getElementById(`${id}${baseFalsa[id].email}`).innerHTML = baseFalsa[id].nome;
            document.getElementById("editorzao").innerHTML =''

        }

}


function mostraEntrar() {
    document.getElementById("formEntra").style.display = 'block'
    document.getElementById("btnEntrar").style.display = 'none'
    document.getElementById("formCadastra").style.display = 'none'
    document.getElementById("btnCadastrar").style.display = 'block'
}

function mostraCadastra() {
    document.getElementById("formCadastra").style.display = 'block'
    document.getElementById("formEntra").style.display = 'none'
    document.getElementById("btnEntrar").style.display = 'block'
    document.getElementById("btnCadastrar").style.display = 'none'

}

function apagarRegistro(id) {
    
document.getElementById(`cadastro${id}`).innerHTML ='';
baseFalsa.splice(id,1)
}