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

const util = require('util')
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

//1ºpasso: adicionar a palavra async -> automaticamente ela retornará uma Promise

async function main() {
    try {
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        /*
        uma função pode estar dentro do Promise.all quando outra promisse que depende dela não esteja no mesmo all
        */
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(
            `
            nome: ${usuario.nome}
            telefone: (${telefone.ddd}) ${telefone.telefone}
            endereço ${endereco.rua}, ${endereco.numero}
            `
        )
    } catch (error) {
        console.error('Deu Ruim', error)
    }
}

main();