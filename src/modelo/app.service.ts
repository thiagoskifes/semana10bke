import { Injectable } from '@nestjs/common';
import Produto from './dados/modelo/produtos';

const produtos = require('./dados-produtos.json');

@Injectable()
export class AppService {
  private listaProdutos: Array<Produto> = [];

  constructor() {
    this.listaProdutos = produtos.map((produto: any) => new Produto(produto.codigo, produto.descricao, produto.marca, produto.valor));
    console.log(this.listaProdutos);
  }

  public listarTodos(): Array<Produto> {
    return this.listaProdutos;
  }

  public buscarPorId(codigo: number): Produto {
    return this.listaProdutos.find(produto => produto.codigo == codigo);
  }

  public salvar(produto: Produto): Produto {
    console.log(produto);

    const incluirProduto = new Produto(
      this.obterProximoCodigo(), 
      produto.descricao,
      produto.marca,
      produto.valor
    );

    this.listaProdutos.push(incluirProduto);
    console.log(incluirProduto);
    return incluirProduto;
  }

  public atualizar(codigo: number, produto: Produto): Produto {
    let indice = this.listaProdutos.findIndex(prod => prod.codigo == codigo);
    this.listaProdutos[indice] = produto;
    return produto;
  }

  public excluir(codigo: number): void {
    let indice = this.listaProdutos.findIndex(prod => prod.codigo == codigo);
    this.listaProdutos.splice(indice, 1);
  }

  public obterProximoCodigo(): number {
    if (this.listaProdutos.length == 0) {
      return 1;
    } else {
      let ultimoRegistro = this.listaProdutos[this.listaProdutos.length - 1];
      return ultimoRegistro.codigo + 1;
    }
  }
}
