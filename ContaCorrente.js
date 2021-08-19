    //Utilizamos classes visando organizar melhor os atributos.
    import { Cliente } from "./Cliente.js";

    //Utilizamos a palavra reservada 'export' para permitirmos a exportação da classe.
    export class ContaCorrente {    

    //public classes
    static numeroDeContas = 0; //a palavra reservada Static, atribui a variavel um método estático. Utilizamos neste caso para contagem de contas existentes no sistema.
    agencia;

    //private classes
    _saldo = 0; // "_" serve para declararmos que a classe será do tipo privada.
    _cliente;

    //Utilizamos o acessor set para setar um atributo.
    set cliente(novoValor){    
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    }

    //utilizamos o acessor get para quando quisermos puxar atributo.
    get cliente(){ 
        return this._cliente;
    }

   
    get saldo(){    
        return this._saldo;
    }

    //Construtores trabalham com a inicialização de atributos
    constructor(agency, cliente){
        this.agencia = agency;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //Como pertênce a conta corrente, chamamos a classe ContaCorrente para istânciar o numero de contas
        
    }

    //Criamos métodos para realizar ações.
    //condicionamos para que o saque só possa ser realizado caso o valor disponível seja maior que o sacado
    saque(valorSaque) {  
        if (this._saldo >= valorSaque) { 
            this._saldo -= valorSaque;
            return valorSaque; //metodo com retorno, retorna o valor que foi indicado a ser sacado. 
        }
    }

    //Utilizamos o EarlyReturn para realizar uma ou mais verificações, e quando o valor for true, a execução irá parar. 
    depositar(valorDeposito) {
        if (valorDeposito <= 0) return valorDeposito; 
        this._saldo += valorDeposito;

    }

    //este metodo realiza a função de transferir valores entre contas.
    transferir(valor, conta){  
        const valorTransferencia = this.saque(valor);
        conta.depositar(valorTransferencia);

    }
}
