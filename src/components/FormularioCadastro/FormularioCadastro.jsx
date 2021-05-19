import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() { 
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {  
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handlerMudarTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudarTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handlerMudarCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._handlerMudarCategoria.bind(this)}
          className="cadastro-nota-input"
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
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
