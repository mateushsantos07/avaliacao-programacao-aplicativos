import leia from "readline-sync"
import Livro from "./Livro";
export default class Biblioteca {

    private livro: Livro[] = [];

    public addLivro() {
        const titulo = leia.question("DIGITE O TÍTULO DO LIVRO: ");
        const autor = leia.question("DIGITE O AUTOR DO LIVRO: ");
        const isbn = leia.question("DIGITE O ISBN DO LIVRO: ");

        const livro = new Livro(titulo, autor, isbn);
        this.livro.push(livro);
        console.log("LIVRO ADICIONADO COM SUCESSO");
    }

    public removeLivro() {
        console.log("--------------------REMOVER LIVRO--------------------");
        const isbn = leia.question("DIGITE O ISBN DO LIVRO PARA REMOVER: ");
        const index = this.livro.findIndex(livro => livro.getIsbn() === isbn);

        if (index !== -1) {
            this.livro.splice(index, 1);
            console.log(`LIVRO COM ISBN ${isbn} REMOVIDO COM SUCESSO`);
        } else {
            console.log(`NÃO FOI ENCONTRADO NENHUM LIVRO COM O ISBN ${isbn}`);
        }
    }

    public mostrarDetalhes(mostrar?: { titulo: string; autor: string; isbn: string }): void {
        if (mostrar) {
            console.log(`Título: ${mostrar.titulo}`);
            console.log(`Autor: ${mostrar.autor}`);
            console.log(`ISBN: ${mostrar.isbn}`);
        } else {
            console.log("Nenhum detalhe fornecido.");
        }
    }

    public buscarLivro() {
        const isbn = leia.question("DIGITE O ISBN DO LIVRO QUE DESEJA BUSCAR: ");
        const livro = this.livro.find(livro => livro.getIsbn() === isbn);

        if (livro) {
            livro.exibirDetalhes();
        } else {
            console.log("LIVRO NÃO ENCONTRADO!");
        }
    }
}