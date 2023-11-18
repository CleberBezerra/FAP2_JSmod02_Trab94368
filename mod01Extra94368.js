// import prompt from 'prompt';
const prompt = require('prompt-sync')();

let banco = new Object();
banco.conta = "";
banco.saldo = "";
banco.tipo = "";
banco.agencia = "";

// outra forma
let banco2 = {conta2: "", saldo2: "", tipo2: "", agencia2: ""}

// com função construtora
function Banco3(conta3, saldo3, tipo3, agencia3) {
    // propiedades
    this.conta3 = conta3;
    this.saldo3 = saldo3;
    this.tipo3 = tipo3;
    this.agencia3 = agencia3;
    // métodos
    mostrarSaldo = function SaldoValor() {
        console.log(this.saldo3);
    }
}
let minhaConta = new Banco3("123", 500.00, "CC", "987");
Banco3.mostrarSaldo();
//console.log(minhaConta);