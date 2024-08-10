const { question, questionInt, questionFloat} = require("readline-sync");

const Pessoa = require('./Pessoa');
const Elevador = require('./Elevador');

const cargaMaxima = questionInt('Informe a capacidade maxima: ');
const numeroDeAnadres = questionInt('informe a quantidade de andares: ');

const elevador = new Elevador(cargaMaxima, numeroDeAnadres);

while (true) {
    console.log('\nMENU');
    console.log('1 - Adicionar pessoa');
    console.log('2 - Remover pessoa');
    console.log('3 - Subir');
    console.log('4 - Descer');
    console.log('5 - Sair');
    
    let menu = questionInt('Escolha uma opcao: ');

    switch (menu) {
        case 1:
            const nome = question('Informe o nome da pessoa: ');
            const peso = questionFloat('Informe o peso da pessoa: ');
            const pessoa = new Pessoa(nome, peso);
            elevador.adicionarPessoa(pessoa);
            break;

        case 2:
            console.table(elevador.pessoas);
            const index = questionInt('Informe o index: ');
            elevador.removerPessoa(index);
            break;

        case 3:
            elevador.subir();
            break;
        
        case 4:
            elevador.descer();
            break;

        case 5:
            console.log('Fim');
            break;
            
        default:
            break;
    }
    
    if (menu == 5) {
        break;
    }
}