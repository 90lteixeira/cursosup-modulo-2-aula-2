import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handlerMudarTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handlerMudarTexto(evento) {
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <input
          className="cadastro-nota-input"
          type="text"
          placeholder="Título da nota"
          onChange={this._handlerMudarTitulo.bind(this)}
        />
        <textarea
          className="cadastro-nota-input"
          rows="10"
          placeholder="Escreva sua nota . . ."
          onChange={this._handlerMudarTexto.bind(this)}
        />
        <button className="cadastro-nota-button">Criar nova nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
