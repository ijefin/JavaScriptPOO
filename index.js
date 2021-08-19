//para importar uma classe, utilizamos o seguinte modelo. import {x} from ./nomeclasse.js.
import {Cliente} from "./Cliente.js" 
import {ContaCorrente} from "./ContaCorrente.js"

//---------------------------------------------------------//-------------------------------------------------------------/
                                                       //Clientes
//---------------------------------------------------------//-------------------------------------------------------------//

//Para chamar os atributos dentro de uma classe, declaramos uma variavel e damos a ela o valor da classe criada.
const cliente1 = new Cliente('Jefferson Lucas Gomes','111.222.555-77', '00/10/1500');
const cliente2 = new Cliente('Anna Luiza C Batista', '333.222.555-12','11/12/1500');
const cliente3 = new Cliente('Pedro Souza','000.111.222-23','09/12/1990');

//---------------------------------------------------------//-------------------------------------------------------------//
                                                        //Contas
//---------------------------------------------------------//-------------------------------------------------------------//

//Novamente, declaramos variaveis para que nossos atributos possam ser chamados.
const contaJeff = new ContaCorrente(1426, cliente1);
const contaAnna = new ContaCorrente(1111, cliente2);
const contaPeuu = new ContaCorrente(6440, cliente3);

//---------------------------------------------------------//-------------------------------------------------------------//
                                                        //Testes
//---------------------------------------------------------//-------------------------------------------------------------//

