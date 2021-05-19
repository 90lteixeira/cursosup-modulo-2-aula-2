import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
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

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="categoria">
        <input
          className="cadastro-nota-input"
          type="text"
          placeholder="Digite uma nova categoria e aperte enter"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
        <ul>
          {this.state.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeCategorias;
