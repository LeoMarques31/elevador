class Elevador {
    constructor(cargaMaxima, numeroDeAnadres) {
        this.cargaMaxima = cargaMaxima;
        this.numeroDeAnadres = numeroDeAnadres;
        this.andarAtual = 0;
        this.pessoas = [];
        
    }

    subir(){
        let cargaAtual = this.obterCargaAtual();

        if (cargaAtual > this.cargaMaxima) {
            console.log(`O elevador não pode deslocar, carga excedida. Capacidade máxima: ${this.cargaMaxima}, carga atual: ${cargaAtual}.`);
            return; 
        }

        if (this.andarAtual < this.numeroDeAnadres) {
            this.andarAtual++;
        }

        this.statusElevador();
    }
    
    descer(){
        let cargaAtual = this.obterCargaAtual();

        if (cargaAtual > this.cargaMaxima) {
            console.log(`O elevador não pode deslocar, carga excedida. Capacidade máxima: ${this.cargaMaxima}, carga atual: ${cargaAtual}.`);
            return;
        }

        if (this.andarAtual > 0) {
            this.andarAtual--;
        }

        this.statusElevador();
    }

    obterCargaAtual(){
        let cargaAtual = 0;
        for (let i = 0; i < this.pessoas.length; i++) {
            const pessoa = this.pessoas[i];
            cargaAtual += pessoa.peso;
        }
        return cargaAtual;

    }

    adicionarPessoa(pessoa){
        this.pessoas.push(pessoa);
        this.statusElevador;
    }

    removerPessoa(index){
        this.pessoas.splice(index, 1);
        this.statusElevador();
    }

    statusElevador(){
        console.log(`O andar atual é: ${this.andarAtual}`);
        console.log(`Pessoas a bordo: ${this.pessoas.length > 0 ? this.pessoas.join(', ') : 'nenhum. '}`);
        console.log(`A carga atual é: ${this.obterCargaAtual()}`);
    }
}

module.exports = Elevador;