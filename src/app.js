/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadorDominios() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    //Declaramos un array donde se guardaran todos los strings.
    const posibilidades = [];

    //Creamos un loop for pata iterar los items del array.
    for (let i = 0; i <= pronoun.length - 1; i++) {
      for (let j = 0; j <= adj.length - 1; j++) {
        for (let k = 0; k <= noun.length - 1; k++) {
          posibilidades.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
        }
      }
    }
    return posibilidades;
  }

  //Creamos una funcion que nos imprima todos las posibilidades de dominios que hay.
  function imprimirDominios() {
    document.getElementById("posibilidad").innerHTML = generadorDominios().join(
      "<br>"
    );
  }
  imprimirDominios();
};
