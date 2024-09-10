import Livro from "./Livro";

export default class LivroFisico extends Livro {
    numeroPaginas: number;

    constructor(titulo: string, autor: string, ISBN: string, numeroPaginas: number) {
        super(titulo, autor, ISBN);
        this.numeroPaginas = numeroPaginas;
    }

    public override exibirDetalhes(): void {

        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Número de Páginas: ${this.numeroPaginas}`);
    }
}
