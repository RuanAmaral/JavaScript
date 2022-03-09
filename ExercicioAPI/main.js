let pessoa = {
  nivel: 0,
  vitalidade: 0,
  conhecimento: 0,
  fortitude: 0,
  forca: 0,
  destreza: 0,
  resistencia: 0,
  inteligencia: 0,
  fe: 0,
};
let nivelInicial = {
  nivel: 0,
  vitalidade: 0,
  conhecimento: 0,
  fortitude: 0,
  forca: 0,
  destreza: 0,
  resistencia: 0,
  inteligencia: 0,
  fe: 0,
};

let arma = {
  dano: {
    physical: 0,
    magic: 0,
    lightning: 0,
    fire: 0,
  },
  requirimentos: {
    faith: 14,
    strength: 10,
    intelligence: 0,
    dexterity: 10,
  },
};

let classeEscolhida = "";

window.onload = () => {
  document.getElementById("kinght").onclick = () => selecionaClasse("Kinght");
  document.getElementById("archer").onclick = () => selecionaClasse("Archer");
  document.getElementById("sorcerer").onclick = () =>
    selecionaClasse("Sorcerer");
  document.getElementById("pyromancer").onclick = () =>
    selecionaClasse("Pyromancer");
  document.getElementById("deprived").onclick = () =>
    selecionaClasse("Deprived");
};

function selecionaClasse(classe) {
  // console.log(classe)
  switch (classe) {
    case "Kinght":
      pessoa.nivel = 5;
      pessoa.vitalidade = 14;
      pessoa.conhecimento = 10;
      pessoa.fortitude = 10;
      pessoa.forca = 11;
      pessoa.destreza = 11;
      pessoa.resistencia = 10;
      pessoa.inteligencia = 9;
      pessoa.fe = 11;

      $("#divArcher").remove();
      $("#divSorcerer").remove();
      $("#divPyromancer").remove();
      $("#divDeprived").remove();

      break;
    case "Archer":
      pessoa.nivel = 4;
      pessoa.vitalidade = 11;
      pessoa.conhecimento = 9;
      pessoa.fortitude = 11;
      pessoa.forca = 12;
      pessoa.destreza = 14;
      pessoa.resistencia = 11;
      pessoa.inteligencia = 9;
      pessoa.fe = 9;

      $("#divKinght").remove();
      $("#divSorcerer").remove();
      $("#divPyromancer").remove();
      $("#divDeprived").remove();

      break;
    case "Sorcerer":
      pessoa.nivel = 3;
      pessoa.vitalidade = 8;
      pessoa.conhecimento = 15;
      pessoa.fortitude = 8;
      pessoa.forca = 9;
      pessoa.destreza = 11;
      pessoa.resistencia = 8;
      pessoa.inteligencia = 15;
      pessoa.fe = 8;

      $("#divArcher").remove();
      $("#divKinght").remove();
      $("#divPyromancer").remove();
      $("#divDeprived").remove();

      break;
    case "Pyromancer":
      pessoa.nivel = 1;
      pessoa.vitalidade = 10;
      pessoa.conhecimento = 12;
      pessoa.fortitude = 11;
      pessoa.forca = 12;
      pessoa.destreza = 9;
      pessoa.resistencia = 12;
      pessoa.inteligencia = 10;
      pessoa.fe = 8;

      $("#divArcher").remove();
      $("#divSorcerer").remove();
      $("#divKinght").remove();
      $("#divDeprived").remove();

      break;
    case "Deprived":
      pessoa.nivel = 6;
      pessoa.vitalidade = 11;
      pessoa.conhecimento = 11;
      pessoa.fortitude = 11;
      pessoa.forca = 11;
      pessoa.destreza = 11;
      pessoa.resistencia = 11;
      pessoa.inteligencia = 11;
      pessoa.fe = 11;

      $("#divArcher").remove();
      $("#divSorcerer").remove();
      $("#divPyromancer").remove();
      $("#divKinght").remove();

      break;

    default:
      console.log("default");
      break;
  }

  classeEscolhida = classe;

  let divClasse = "#div" + classe;

  $(divClasse).removeClass("divClasse");
  // console.log(divClasse)
  $(divClasse).addClass("classeSelecionada");

  $("#stats").html(`<div id="stats">
    <div id="statsNomes">
        <div>
            <span>Nivel:</span>
        </div>
        <div>
            <span>Vitalidade:</span>
        </div>
        <div>
            <span>Conhecimento:</span>
        </div>
        <div>
            <span>Fortitude:</span>
        </div>
        <div>
            <span>Forca:</span>
        </div>
        <div>
            <span>Destreza:</span>
        </div>
        <div>
            <span>Resistencia:</span>
        </div>
        <div>
            <span>Inteligencia:</span>
        </div>
        <div>
            <span>Fé:</span>
        </div>
        <button type="button" id="boataso" onclick="resetaStats()" class="btn btn-light">Reseta</button>

    </div>
        <div id="statsValues">
            <div>
                <span id="nivel">${pessoa.nivel}</span>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(1)" type="button" class="btn btn-light">&#60;</button>
                <span id="vitalidade">${pessoa.vitalidade}</span>
                <button id="mudaStats" onclick="mudaStats(9)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(2)" type="button" class="btn btn-light">&#60;</button>
                <span id="conhecimento">${pessoa.conhecimento}</span>
                <button id="mudaStats" onclick="mudaStats(10)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(3)" type="button" class="btn btn-light">&#60;</button>
                <span id="fortitude">${pessoa.fortitude}</span>
                <button id="mudaStats" onclick="mudaStats(11)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(4)" type="button" class="btn btn-light">&#60;</button>
                <span id="forca">${pessoa.forca}</span>
                <button id="mudaStats" onclick="mudaStats(12)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(5)" type="button" class="btn btn-light">&#60;</button>
                <span id="destreza">${pessoa.destreza}</span>
                <button id="mudaStats" onclick="mudaStats(13)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(6)" type="button" class="btn btn-light">&#60;</button>
                <span id="resistencia">${pessoa.resistencia}</span>
                <button id="mudaStats" onclick="mudaStats(14)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" onclick="mudaStats(7)" type="button" class="btn btn-light">&#60;</button>
                <span id="inteligencia">${pessoa.inteligencia}</span>
                <button id="mudaStats" onclick="mudaStats(15)" type="button" class="btn btn-light">&#62;</button>
            </div>
            <div>
                <button id="mudaStats" type="button" onclick="mudaStats(8)" class="btn btn-light">&#60;</button>
                <span id="fe">${pessoa.fe}</span>
                <button id="mudaStats" type="button" onclick="mudaStats(16)" class="btn btn-light">&#62;</button>
            </div>
            <div>
            <button type="button" id="boataso" onclick="confirmaStats()" class="btn btn-light">Confirma</button>
            </div>
</div>`);

  // <div id="stats">
  //         <div id="statsNomes">
  //             <div>
  //                 <span>Nivel:</span>
  //             </div>
  //             <div>
  //                 <span>Vitalidade:</span>
  //             </div>
  //             <div>
  //                 <span>Conhecimento:</span>
  //             </div>
  //             <div>
  //                 <span>Fortitude:</span>
  //             </div>
  //             <div>
  //                 <span>Forca:</span>
  //             </div>
  //             <div>
  //                 <span>Destreza:</span>
  //             </div>
  //             <div>
  //                 <span>Resistencia:</span>
  //             </div>
  //             <div>
  //                 <span>Inteligencia:</span>
  //             </div>
  //             <div>
  //                 <span>Fé:</span>
  //             </div>
  //         </div>
  //             <div id="statsValues">
  //                 <div>
  //                     <span id="nivel">mude</span>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(1)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="vitalidade">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(9)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(2)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="conhecimento">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(10)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(3)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="fortitude">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(11)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(4)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="forca">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(12)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(5)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="destreza">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(13)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(6)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="resistencia">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(14)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button id="mudaStats" onclick="mudaStats(7)" type="button" class="btn btn-light">&#60;</button>
  //                     <span id="inteligencia">mude</span>
  //                     <button id="mudaStats" onclick="mudaStats(15)" type="button" class="btn btn-light">&#62;</button>
  //                 </div>
  //                 <div>
  //                     <button type="button" onclick="mudaStats(8)" class="btn btn-light">&#60;</button>
  //                     <span id="fe">mude</span>
  //                     <button type="button" onclick="mudaStats(16)" class="btn btn-light">&#62;</button>
  //                 </div>
  //             </div>
  //     </div>

  nivelInicial.nivel = pessoa.nivel;
  nivelInicial.conhecimento = pessoa.conhecimento;
  nivelInicial.vitalidade = pessoa.vitalidade;
  nivelInicial.forca = pessoa.forca;
  nivelInicial.destreza = pessoa.destreza;
  nivelInicial.resistencia = pessoa.resistencia;
  nivelInicial.inteligencia = pessoa.inteligencia;
  nivelInicial.fe = pessoa.fe;
  nivelInicial.fortitude = pessoa.fortitude;
}

function mudaStats(valorMuda) {
  /**
   * --------Diminui-------
   * 1 == diminui vitalidade
   * 2 == diminui conhecimento
   * 3 == diminui fortitude
   * 4 == diminui forca
   * 5 == diminui Destreza
   * 6 == diminui Resistencia
   * 7 == diminui Inteligencia
   * 8 == diminui fé
   * --------Aumenta--------
   * 9 == aumenta Vitalidade
   * 10 == aumenta conhecimento
   * 11 == aumenta fortitude
   * 12 == aumenta forca
   * 13 == aumenta Destreza
   * 14 == aumenta Resistencia
   * 15 == aumenta Inteligencia
   * 16 == aumenta Fé
   */

  // console.log(valorMuda)

  if (valorMuda < 9) {
    if (valorMuda == 1) {
      if (pessoa.vitalidade == nivelInicial.vitalidade) {
        return;
      } else {
        pessoa.vitalidade--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 2) {
      if (pessoa.conhecimento == nivelInicial.conhecimento) {
        return;
      } else {
        pessoa.conhecimento--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 3) {
      if (pessoa.fortitude == nivelInicial.fortitude) {
        return;
      } else {
        pessoa.fortitude--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 4) {
      if (pessoa.forca == nivelInicial.forca) {
        return;
      } else {
        pessoa.forca--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 5) {
      if (pessoa.destreza == nivelInicial.destreza) {
        return;
      } else {
        pessoa.destreza--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 6) {
      if (pessoa.resistencia == nivelInicial.resistencia) {
        return;
      } else {
        pessoa.resistencia--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 7) {
      if (pessoa.inteligencia == nivelInicial.inteligencia) {
        return;
      } else {
        pessoa.inteligencia--;
        pessoa.nivel--;
      }
    } else if (valorMuda == 8) {
      if (pessoa.fe == nivelInicial.fe) {
        return;
      } else {
        pessoa.fe--;
        pessoa.nivel--;
      }
    }
  } else {
    if (valorMuda == 9) {
      pessoa.vitalidade++;
      pessoa.nivel++;
    } else if (valorMuda == 10) {
      pessoa.conhecimento++;
      pessoa.nivel++;
    } else if (valorMuda == 11) {
      pessoa.fortitude++;
      pessoa.nivel++;
    } else if (valorMuda == 12) {
      pessoa.forca++;
      pessoa.nivel++;
    } else if (valorMuda == 13) {
      pessoa.destreza++;
      pessoa.nivel++;
    } else if (valorMuda == 14) {
      pessoa.resistencia++;
      pessoa.nivel++;
    } else if (valorMuda == 15) {
      pessoa.inteligencia++;
      pessoa.nivel++;
    } else if (valorMuda == 16) {
      pessoa.fe++;
      pessoa.nivel++;
    }
  }

  $("#nivel").html(pessoa.nivel);
  $("#vitalidade").html(pessoa.vitalidade);
  $("#conhecimento").html(pessoa.conhecimento);
  $("#fortitude").html(pessoa.fortitude);
  $("#forca").html(pessoa.forca);
  $("#destreza").html(pessoa.destreza);
  $("#resistencia").html(pessoa.resistencia);
  $("#inteligencia").html(pessoa.inteligencia);
  $("#fe").html(pessoa.fe);
}

function resetaStats() {
  pessoa.nivel = nivelInicial.nivel;
  pessoa.conhecimento = nivelInicial.conhecimento;
  pessoa.vitalidade = nivelInicial.vitalidade;
  pessoa.forca = nivelInicial.forca;
  pessoa.destreza = nivelInicial.destreza;
  pessoa.resistencia = nivelInicial.resistencia;
  pessoa.inteligencia = nivelInicial.inteligencia;
  pessoa.fe = nivelInicial.fe;
  pessoa.fortitude = nivelInicial.fortitude;

  $("#nivel").html(pessoa.nivel);
  $("#vitalidade").html(pessoa.vitalidade);
  $("#conhecimento").html(pessoa.conhecimento);
  $("#fortitude").html(pessoa.fortitude);
  $("#forca").html(pessoa.forca);
  $("#destreza").html(pessoa.destreza);
  $("#resistencia").html(pessoa.resistencia);
  $("#inteligencia").html(pessoa.inteligencia);
  $("#fe").html(pessoa.fe);
}

function confirmaStats() {
  for (let i = 0; i < 17; i++) {
    $("#mudaStats").remove();
  }

  $("#boataso").remove();
  $("#boataso").remove();

  geraListaArmas();
}

let armas = [
  {
    nome: "",
    dano: "",
    requimentos: "",
    tipo: "",
  },
];

let objeto = main()
  // let armas = []
  .then((objeto) => {
    armas = objeto;
    console.log(armas);
  });

// let objeto = main()

// console.log(objeto)
console.log(armas);

// console.log(armas)

function geraListaArmas() {
  document.getElementById("listaArmas").style.display = "flex";
  document.getElementById("detalhes").style.display = "none";
  $("#alerta").remove();

  $("#listaArmas").html(
    `
        <table class="table table-dark table-striped">
        <thead>
        <th>Nome</th>
        <th>Tipo</th>
        </thead>
        <tbody id="corpoLista">
        </tbody>
        </table>
    `
  );

  // console.log(armas)
  let htmls;
  for (let i = 0; i < armas.length; i++) {
    // console.log[]
    // console.log(armas)

    let html = `<tr onclick="mostraDetalhes(${i})">
       <td>${armas[i].nome}</td>
       <td>${armas[i].tipo}</td>
       </tr>
   `;
    htmls += html;
    // console.log(htmls)
  }

  $("#corpoLista").html(htmls);
}

document.getElementById("listaArmas").style.display = "none";
document.getElementById("detalhes").style.display = "none";
document.getElementById("detalhesAmais").style.display = "none";

let htmlAlerta = `<div id="alerta" class="alert alert-danger d-flex align-items-center" role="alert">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
    class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
    <path
        d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg>
<div class="textoAlert">
    <p>

        Cuidado, seus requisitos não são suficientes para manuzear esta arma.
    </p>
    <p>
        Se decidir prosseguir, saiba que o uso desta arma será ineficiente
    </p>
   
</div>
</div>`;

function mostraDetalhes(posicao) {
  $("#listaArmas").html("");
  document.getElementById("listaArmas").style.display = "none";
  document.getElementById("detalhes").style.display = "flex";
  document.getElementById("detalhesAmais").style.display = "flex";

  $("#detalhes").html(
    `<button type="button" onclick="geraListaArmas()" class="btn btn-secondary">Voltar para listagem</button> 
    <table class="table table-dark table-striped">
        <thead>
            <th>Nome</th>
            <th>Tipo</th>
        </thead>
        <tbody>
            <tr>
                <th>${armas[posicao].nome}</th>
                <th>${armas[posicao].tipo}</th>
               </tr>
        </tbody>
    </table>
    <table class="table table-dark table-striped">
        <thead>
            <th>Requirimentos</th>
            <th></th>
           </thead>
           <tbody>
               <tr>
                   <th>Forca</th>
                   <td id="rqForca">${armas[posicao].requimentos.strength}</td>
               </tr>
           <tr>
               <th>Destreza</th>
               <td id="rqDestreza">${armas[posicao].requimentos.dexterity}</td>
           </tr>
           <tr>
               <th>Inteligencia</th>
               <td id="rqInteligencia">${armas[posicao].requimentos.intelligence}</td>
           </tr>
           <tr>
               <th>Fé</th>
               <td id="rqFe">${armas[posicao].requimentos.faith}</td>
           </tr>
       </tbody>
   </table>
   <table class="table table-dark table-striped">
       <thead>
           <th>Tipo de Dano</th>
           <th></th>
       </thead>
       <tbody>
           <tr>
               <th>Fisico:</th>
               <td>${armas[posicao].dano.physical}</td>
           </tr>
           <tr>
               <th>Magico:</th>
               <td>${armas[posicao].dano.magic}</td>
           </tr>
           <tr>
               <th>Eletrico:</th>
                <td>${armas[posicao].dano.lightning}</td>
           </tr>
           <tr>
               <th>Fogo:</th>
               <td>${armas[posicao].dano.fire}</td>
           </tr>
       </tbody>
   </table>
   <button type="button" onclick="seleciona(${posicao})" class="btn btn-secondary">Escolher</button>`
  );

  let caiu = false;
  if (pessoa.forca < armas[posicao].requimentos.strength) {
    $("#rqForca").addClass("incompativel");
    caiu = true;
  }
  if (pessoa.destreza < armas[posicao].requimentos.dexterity) {
    $("#rqDestreza").addClass("incompativel");
    caiu = true;
  }
  if (pessoa.inteligencia < armas[posicao].requimentos.intelligence) {
    $("#rqInteligencia").addClass("incompativel");
    caiu = true;
  }
  if (pessoa.fe < armas[posicao].requimentos.faith) {
    $("#rqFe").addClass("incompativel");
    caiu = true;
  }

  if (caiu) {
    document.getElementById("detalhesAmais").innerHTML += `${htmlAlerta}`;
    danoFisico = 30;
    danoFogo = 0;
    danoMagico = 0;
    danoRaio = 0;
  } else {
    danoFisico = armas[posicao].dano.physical;
    danoFogo = armas[posicao].dano.fire;
    danoMagico = armas[posicao].dano.lightning;
    danoRaio = armas[posicao].dano.magic;
  }
  danoTotal = danoFisico + danoFogo + danoMagico + danoRaio;
}

let htmlPdf = ``;

let danoFisico = 0;
let danoFogo = 0;
let danoMagico = 0;
let danoRaio = 0;
let danoTotal = 0;

function seleciona(posicaoArma) {
  let idClasse = "#div" + classeEscolhida;
  $(idClasse).removeClass("classeSelecionada");
  $(detalhesAmais).remove();
  $("#stats").remove();
  $(idClasse).addClass("imagemFinal");
  $("#listagemFinais").html(`
    <div id="tabelaStatsFinal">
    <table class="table table-dark table-striped">
    <thead>
    <th>Nivel :</th>
    <th>${pessoa.nivel}</th>
    </thead>
    <tbody>
    <tr>
    <td>
    Vitalidae : 
    </td>
       <td>
       ${pessoa.vitalidade} 
       </td>
    </tr>
    <tr>
       <td>
       Conhecimento : 
       </td>
       <td>
       ${pessoa.conhecimento} 
       </td>
    </tr>
    <tr>
     <td>
         Fortitude : 
     </td>
     <td>
         ${pessoa.fortitude} 
     </td>
    </tr>
    <tr>
     <td>
         Forca : 
     </td>
     <td>
         ${pessoa.forca} 
     </td>
    </tr>
    <tr>
     <td>
         Destreza : 
     </td>
     <td>
         ${pessoa.destreza} 
     </td>
    </tr>
    <tr>
     <td>
         Resistencia : 
     </td>
     <td>
         ${pessoa.resistencia} 
     </td>
    </tr>
    <tr>
     <td>
         Inteligencia : 
     </td>
     <td>
         ${pessoa.inteligencia} 
     </td>
    </tr>
    <tr>
     <td>
         Fe : 
     </td>
     <td>
         ${pessoa.fe} 
     </td>
    </tr>
    </tbody>
    </table>
    </div>
    <div id="dadosDoPersonagem">
    <table class="table table-dark table-striped">
    <tbody>
    <tr>
    <td>
     HP
    </td>
    <td>
    ${pessoa.vitalidade * 47}
   </td>
    </tr>
    <tr>
    <td>
     Stamina
    </td>
    <td>
    ${pessoa.fortitude * 9.1}
   </td>
    </tr>
    <tr>
    <td>
     Dano com a Arma Escolhida
    </td>
    <td>
    ${danoTotal}
   </td>
    </tr>
    <tr>
    <th>
    Caracteristicas da Arma
    </th>
    </tr>
    </tbody>
    </table>
    </div>
    <div id="tabelaArmaFinal">
    <table class="table table-dark table-striped">
    <thead></thead>
    </table>
    </div>
    <div id="tabelaDadoDoPesonagem">
    <table class="table table-dark table-striped">
    <thead></thead>
    </table>
    </div>
    <div id="divBotao">
    <button type="button" class="btn btn-secondary" id="botaoBaixar">Baixar Ficha</button>
    </div>
    `);
}

$("#botaoBaixar").click(function () {
  doc.fromHTML($("body").html(), 15, 15, {
    width: 170,
    elementHandlers: specialElementHandlers,
  });
  doc.save("sample-file.pdf");
});
