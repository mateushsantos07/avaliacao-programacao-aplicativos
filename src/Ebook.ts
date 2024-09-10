import Livro from "./Livro";

export default class Ebook extends Livro {
    tamanhoArquivo: number;

    constructor(titulo: string, autor: string, ISBN: string, tamanhoArquivo: number) {
        super(titulo, autor, ISBN);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    public override exibirDetalhes(): void {

        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Número de Páginas: ${this.tamanhoArquivo}`);
    }
}