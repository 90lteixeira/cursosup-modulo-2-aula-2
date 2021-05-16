import React, { Component } from "react";  
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
class App extends Component  {

  constructor() { 
    super(); 
    this.state = {
      notas:[]
    };
  }
 
  criarNota(titulo, texto) {
    if (!titulo || !texto) {
      alert("Por favor preencha os campos titulo e texto para criar uma nota");
      return false;
    }

    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado); 
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
