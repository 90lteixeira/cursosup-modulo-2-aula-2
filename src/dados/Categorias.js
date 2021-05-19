export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  adicionarCategoria(categoria) {
    if (!categoria) {
      alert("Por favor preencha o nome para adicionar uma categoria nova");
      return false;
    }

    this.categorias.push(categoria);
    this.notificar();
  }
}
