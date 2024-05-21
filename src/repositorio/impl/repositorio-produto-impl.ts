import DadosProduto from "../../util/dados-produto";
import IRepositorioProduto from "../repositorio-produto";
import Produto from "../../modelo/produtos";

export default class RepositorioProdutoImpl implements IRepositorioProduto {
    
    // Array de Produtos
    private listaProdutos: Array<Produto> = [];
    
    constructor() {
        // Carrega as informações contidas no arquivo JSON
        this.listaProdutos = DadosProduto.dados();
    }

    public listarTodos(): Array<Produto> {
        return this.listaProdutos;
    }

    public buscarPorId(id: number): Produto {
        return this.listaProdutos.find(
            produto => produto.codigo === id
        );
    }

    public salvar(produto: Produto): void {
        this.listaProdutos.push(produto);
    }

    public atualizar(id: number, produto: Produto): void {
        // Encontra o índice do registro que será atualizado
        let indice = this.listaProdutos.findIndex(
            produto => produto.codigo === id
        );

        // Atualiza o registro
        if (indice !== -1) {
            this.listaProdutos[indice] = produto;
        }
    }

    public excluir(id: number): void {
        // Encontra o índice do registro que será removido
        let indice = this.listaProdutos.findIndex(
            produto => produto.codigo === id
        );

        // Remove o registro do array
        if (indice !== -1) {
            this.listaProdutos.splice(indice, 1);
        }
    }

    // Apenas para simular a chave incremental do banco de dados
    // Retorna o próximo valor do identificador para que não 
    // haja duplicidade de identificadores
    public obterProximoId(): number {
        if (this.listaProdutos.length === 0) {
            return 1;
        } else {
            // Obtém o último registro do array
            let ultimoRegistro = this.listaProdutos[
                this.listaProdutos.length - 1
            ];

            // Incrementa o identificador para ser usado em um novo registro
            return ultimoRegistro.codigo + 1;
        }
    }
}
