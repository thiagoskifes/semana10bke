import Produto from "../modelo/produtos";

export default interface IRepositorioProduto {
    listarTodos(): Array<Produto>;
    buscarPorId(id: number): Produto;
    salvar(produto: Produto): void;
    atualizar(id: number, produto: Produto): void;
    excluir(id: number): void;
}
