let baseFalsa = []
let id =-1

function entra(event) {
    event.preventDefault();
    let email = document.getElementById("emailEntra").value;
    let senha = document.getElementById("senhaEntra").value;
    
    let emailVerify = baseFalsa.find((elemento)=>{
       if (elemento.email === email) {
           return elemento.email;
       }
    })
    let senhaVerify = baseFalsa.find((elemento)=>{
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
    }else{
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
     }else if (senha ===""){
         alert("O amigão digita a senha por favor")
         return
     }else if (emails.includes(email1)) {
         alert("O meu nobre, esse email tá cadastrado já, dá pra cadastrar de novo não");
         return
    }else{
        id +=1
        baseFalsa.push({
            id:id,
            nome: nome,
            email: email1,
            senha: senha
        })
        
        
        let cadastros2 = document.getElementById("cadastrosNomes");

        let newHtml2 = `<li id="${id}${email1}" >${nome}</li>`
        cadastros2.innerHTML += newHtml2
        let cadastros = document.getElementById("cadastrosEmail");
        //coisa antiga não usada
        // let newHtml = '<li id="'+email1+'">'+email1+'</li>'
        let newHtml = `<li>${email1} <button type="button" id ="${id}" name ="editar" onclick="editar(${id})">editar</button></li>`
        cadastros.innerHTML += newHtml

        alert("cadastrou")
        document.getElementById("nome").value ='';
        document.getElementById("emailCadastra").value ='';
        document.getElementById("senhaCadastra").value ='';
        document.getElementById("senhaConfirma").value ='';
        return;
    }
    

    
    
}

window.onload= ()=>{   
    document.getElementById("formEntra").onsubmit = evento=>entra(evento);
    document.getElementById("formCadastra").onsubmit = evento=>cadastra(evento);
    document.querySelectorAll("")
}



function editar(id) {
                
        let cadastroEtditavel = baseFalsa.map((cadastro)=>{
            if(cadastro.id == id){
                return cadastro;
            }
        })
        idNome = cadastroEtditavel.id + cadastroEtditavel.emailS

        let espacoEditor = document.getElementById(`"${cadastroEtditavel.id}"`)
        let htmlEditor = `<label name ="editor">Nome</label><input name ="editor" type="text" id=novoNome value="${cadastroEtditavel.nome}"><label name ="editor">Email</label> <label name ="editor">${cadastroEtditavel.email}</label><label name ="editor">nova senha</label> <input name ="editor" type="password" id="novaSenha"><label name ="editor">Confirme a nova senha</label> <input name ="editor" id="confirmaNovaSenha" type="password">`

    }

function salvarEdicao(id) {
    let valorAntigo = baseFalsa.map((cadastro)=>{
        if(cadastro.id == id){
            return cadastro;
        }
    })
}