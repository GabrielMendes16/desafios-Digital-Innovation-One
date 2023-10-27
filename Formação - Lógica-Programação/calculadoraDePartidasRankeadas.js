let saldoDeViotiras = consultaSaldoDeVitorias(500, 3)
let nivel = " "

function consultaSaldoDeVitorias(vitorias, derrotas) {
    let resultadoDaConsulta = vitorias - derrotas
    return resultadoDaConsulta
}


if (saldoDeViotiras <= 10) {
    nivel = "Ferro"
    console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)
} else if (saldoDeViotiras >= 11 && saldoDeViotiras <= 20) {
    nivel = "Bronze"
    console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)
} else if (saldoDeViotiras >= 21 && saldoDeViotiras <= 50) {
    nivel = "Prata"
    console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)
} else if (saldoDeViotiras >= 51 && saldoDeViotiras <= 80) {
    nivel = "Ouro"
    console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)
} else if (saldoDeViotiras >= 81 && saldoDeViotiras <= 90) {
    nivel = "Lendário"
    console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)
} else (saldoDeViotiras >= 101)
nivel = "Imortal"

console.log("O Herói tem de saldo de " + saldoDeViotiras + " vitorias e" + " está no níel de " + nivel)





