class Pessoa {
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    toString(){
        return this.nome;
    }
}

module.exports = Pessoa;