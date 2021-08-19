//Aqui criamos uma classe, e daremos atributos a ela. (class x {})
export class Cliente {

    nome;
    _cpf;
    _nascimento;

    get cpf(){
        return this._cpf;
    }

    //Construtores trabalham com a inicialização de atributos
    constructor(nome, cpf, nascimento){
        this.nome = nome;
        this._cpf = cpf;
        this._nascimento = nascimento;
    }

    



}