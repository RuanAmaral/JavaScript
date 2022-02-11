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

const util =require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

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

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromisse(resolve, reject) {

        setTimeout(() => {
            return resolve({
                telefone: '91234-5678',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Pinheiros',
            numero: 559
        })
    }, 2000)
}

const usuarioPromisse = obterUsuario()

usuarioPromisse
    .then(function (resultado) {
        return obterTelefone(resultado.id)
            .then(function resolveTelefone(result) {
                /*
                resultado == usuario pois é o retorno da primeira promise
                result == telefone pois é o retorno do telefone que é a segunda promise
                [
                    nós passamos um .then dentro de um .then para passar o valor da promise 
                anterior para frente pois a ordem de execução ficaria da seguinte maneira se não houvesse esse .then dentro de outro .then:
                usuario -> telefone -> telefone(resultado serie esse e perderiamos o resultado da primeira promisse)
                ] 
                */
                return {
                    usuario: {
                        nome: resultado.nome,
                        id: resultado.id
                    },
                    telefone: result
                }
            })
            .then(function (resultado) {
                const endereco = obterEnderecoAsync(resultado.usuario.id)
                return endereco.then(function resolveEndereco(result) {
                    return {
                        usuario: resultado.usuario,
                        telefone: resultado.telefone,
                        endereco: result
                    }
                });
              
            })
    })
    .then(function (resultado) {
        console.log(`
        nome: ${resultado.usuario.nome}
        Endereco: ${resultado.endereco.rua},${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)

    })
    .catch(function (erro) {
        console.error('Deu ruim em usuario', erro)
    })
/*
Para manipular o sucesso usamos a função .then
Para manipular erros, usamos o .catch
*/