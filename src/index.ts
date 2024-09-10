
import leia from 'readline-sync'
import Biblioteca from './Biblioteca';

var livro = new Biblioteca();

console.log("                                                ")

var opcao = 0;
do {
    console.log(`--------------------MENU--------------------`)
    opcao = leia.keyInSelect(["ADICIONAR LIVRO", "REMOVER LIVRO", "BUSCAR LIVRO", "MOSTRAR DETALHES"]) + 1
    switch (opcao) {
        case 1:
            livro.addLivro();
            break;
        case 2:
            livro.removeLivro();
            break;
        case 3:
            livro.buscarLivro();
            break;
        case 4:
            livro.mostrarDetalhes();
            break;
    }
} while (opcao !== 0);