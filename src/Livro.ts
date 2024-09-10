import leia from 'readline-sync';

export default class Livro {

    public titulo: string;
    public autor: string;
    public isbn: string;

    constructor(titulo: string, autor: string, isbn: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`);
    }
}







