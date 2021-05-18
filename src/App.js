import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  /*
  adicionarCategoria(nomeCategoria) {
    if (!nomeCategoria) {
      alert("Por favor preencha o nome para adicionar uma categoria nova");
      return false;
    }

    const novoArrayCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.setState, categorias: novoArrayCategoria };
    this.setState(novoEstado);
  } 

  criarNota(titulo, texto, categoria) {
    if (!titulo || !texto) {
      alert("Por favor preencha os campos titulo e texto para criar uma nota");
      return false;
    }

    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arNotas = this.state.notas;
    arNotas.splice(index, 1);
    this.setState({ notas: arNotas });
  }*/

  render() {
    return (
      <section>
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <ListaDeCategorias
          adicionarCategoria={this.categorias.adicionarCategoria.bind(
            this.categorias
          )}
          categorias={this.categorias}
        />
        <ListaDeNotas
          apagarNota={this.notas.deletarNota.bind(this.notas)}
          notas={this.notas}
        />
      </section>
    );
  }
}

export default App;
