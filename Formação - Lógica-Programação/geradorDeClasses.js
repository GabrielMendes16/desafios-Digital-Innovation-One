class dadosDoHeroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque


    }

    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "Magia"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        } else if (this.tipo === "guerreiro") {
            this.ataque = "Espada"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        } else if (this.tipo === "monge") {
            this.ataque = "Artes Marciais"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        } else if (this.tipo === "ninja") {
            this.ataque = "Shuriken"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }

    }
}

let heroiMago = new dadosDoHeroi("José", 27, "mago")
let heroiGuerreiro = new dadosDoHeroi("José", 27, "guerreiro")
let heroiMonge = new dadosDoHeroi("José", 27, "monge")
let heroiNinja = new dadosDoHeroi("José", 27, "ninja")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()