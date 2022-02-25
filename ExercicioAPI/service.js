

// async function main(){
//     // query params
//     // let resposta = await axios.get (`https://jgalat.github.io/ds-weapons-api?weapon_type=greatsword&class_type=elf`)
//     // route params

//     let resposta = await axios.get (`https://jgalat.github.io/ds-weapons-api/`)
//     // /weapon/:weapon_id/name
//         // console.log(resposta.data)
//         // console.log("dsdssss")
//         // console.log(objeta)

//        let objeta =  resposta.data.map((valorDaVez)=>{
//             return {
//                 nome: valorDaVez.name,
//                 dano : valorDaVez.damage,
//                 requimentos: valorDaVez.requirements,
//                 tipo: valorDaVez.weapon_type
//             }
//          })
//     // for (let i = 1; i < resposta.data.length; i++) {
//     //     objeta.push({
//     //         nome:  resposta.data[i].name,
//     //         dano: resposta.data[i].damage.physical
//     //     })

// return objeta    
//     }

// console.log(resposta.data[0].damage.physical)


// async function main() {

//     let objetao = []
//     await $.get("https://jgalat.github.io/ds-weapons-api/", function (resultado) {
//         // $("#mensagem").html(resultado);.


//         let objeta = JSON.parse(resultado).map((valorDaVez) => {
//             return {
//                 nome: valorDaVez.name,
//                 dano: valorDaVez.damage,
//                 requimentos: valorDaVez.requirements,
//                 tipo: valorDaVez.weapon_type
//             }
//         })

//         objetao = objeta


//     })
//     return objetao

// }



// Set another completion function for the request above
// jqxhr.always(function () {
//     alert("second complete");
// });

async function main() {

    let objetao = []
    


      

 await $.ajax("https://jgalat.github.io/ds-weapons-api/")
    .done(function (resultado) {
        let objeta = JSON.parse(resultado).map((valorDaVez) => {
            return {
                nome: valorDaVez.name,
                dano: valorDaVez.damage,
                requimentos: valorDaVez.requirements,
                tipo: valorDaVez.weapon_type
            }
        })

        objetao = objeta

    })
    .fail(function () {
        alert("error");

    })
    // .always(function (resultado) {
    //     let objeta = JSON.parse(resultado).map((valorDaVez) => {
    //         return {
    //             nome: valorDaVez.name,
    //             dano: valorDaVez.damage,
    //             requimentos: valorDaVez.requirements,
    //             tipo: valorDaVez.weapon_type
    //         }
    //     })

    //     objetao = objeta
    //  });

// console.log(jqxhr)



    
    return objetao

}