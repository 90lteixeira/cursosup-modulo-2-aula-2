import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <section className="lista-nota">
        <ul>
          {this.props.notas.map((nota, index) => {
            return (
              <li key={index}>
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
