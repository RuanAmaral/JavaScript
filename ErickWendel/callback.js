/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do usuario pelo ID
*/

//Não se usa callback desta maneira e sim com promisses pois fica mais facil de controlar a execução e o fluxo

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }
        )
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '91234-5678',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario,callback) {
    setTimeout(() => {
        return callback(null,{
                rua: 'Rua dos Pinheiros',
                numero: 559
        })
    }, 2000)
}

function resolveUsuario(error, usuario) {
    
    console.log('usuario', usuario)
}


// function resolveTelefone(erro,telefone){
    //     if(erro){
//         console.error('Erro em telefone',erro)
//     } else{
    //         console.log('telefone',telefone)
    //     }
    // }
    
    
obterUsuario(function resolveUsuario(error, usuario) {
        if (error) {
            console.error('Erro em Usuario', error)
            return
        }
        obterTelefone(usuario.id, function resolveTelefone(error1,telefone) {
            if (error1) {
                console.error('Erro em Telefone', error1)
                return
            }
                obterEndereco(usuario.id,function resolveEndereco(error2,endereco) {
                    if(error2){
                        console.error('Erro em Endereco', error2)
                        return
                    }
                    console.log(
                        `
                        Nome: ${usuario.nome},
                        Endereco: ${endereco.rua}, ${endereco.numero},
                        Telefone: (${telefone.ddd}), ${telefone.telefone}
                        
                        `
                        )
                    })
                })
        })        
    
    // const endereco = obterEndereco(usuario.id)
    // const telefone = obterTelefone(resolveTelefone)
    
    
    // console.log('telelfone', telefone)
    // console.log('endereci', endereco)