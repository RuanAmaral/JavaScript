/* 
Ciclo de vida de Promises:
    -- Pending: Estado inicial, ainda não terminou ou ainda não foi rejeitado
                |
                | (o Pending retorna uma das duas situações abaixo)
                |   
                |_Fulfilled: Quando executou todas as operações com sucesso
                             |
                             |
                             |_.then(resolverQuandoTerminar)
                                        |
                                        |_Promise
                |_Rejected: Quando a operação falhou
                            |
                            |.then(...,tratarErro)
                                  |
                                  |.catch(tratarErro)
                                  |       |
                                  |       |_Promise
                                  |_ Promise
*/


function obterUsuario() {
    // quando der problema -> reject(ERRO)
    // quando executar com sucesso - resolve  
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve(
                {
                    id: 1,
                    nome: 'Aladin',
                    dataNascimento: new Date()
                }
            )
        }, 1000)
    })
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '91234-5678',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Pinheiros',
            numero: 559
        })
    }, 2000)
}

obterUsuario()
/*
Para manipular o sucesso usamos a função .then
Para manipular erros, usamos o .catch
*/