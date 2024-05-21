export default class Produtos {
    codigo: number;
    descricao: string;
    marca: string;
    valor: number;
  
    constructor(codigo: number, descricao: string, marca: string, valor: number) {
      this.codigo = codigo;
      this.descricao = descricao;
      this.marca = marca;
      this.valor = valor;
    }
  }
  