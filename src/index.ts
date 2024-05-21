import { AppService } from './modelo/app.service';
import Produto from './modelo/produtos';

const appService = new AppService();

// Lista todos os registros existentes
console.log("-------- Listar dados ------");
console.log(appService.listarTodos());

// Cria um novo registro
const incluirProduto = new Produto(
  appService.obterProximoCodigo(),
  "tomate",
  "perim",
  14.99
);

// Salva o registro
console.log("-------- Salvar Produto ------");
appService.salvar(incluirProduto);
console.log(appService.listarTodos());

// Busca pelo ID
console.log("-------- Buscar por ID ------");
const buscaProd = appService.buscarPorId(2);
console.log(buscaProd);

// Atualizar registro
console.log("-------- Atualizar Registro ------");
buscaProd.marca = "juliana";
buscaProd.valor = 12.74;
appService.atualizar(buscaProd.codigo, buscaProd);
console.log(appService.listarTodos());

// Excluir registro
console.log("-------- Excluir Registro ------");
appService.excluir(3);
console.log(appService.listarTodos());

export default appService;
