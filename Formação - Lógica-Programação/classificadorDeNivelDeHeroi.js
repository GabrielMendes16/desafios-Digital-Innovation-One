let nomeDoHeroi = "Afonso Gino";
let experienciaDoHeroi = 2000;

if (experienciaDoHeroi === 0) {
    console.log(nomeDoHeroi + " Você não possui Experiência, é necessário realizar missões para obter.");
} else if (experienciaDoHeroi >= 1 && experienciaDoHeroi <= 1000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Ferro");
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Bronze");
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Prata");
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Ouro");
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Platina");
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Ascendente");
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    console.log(nomeDoHeroi + " Seu Herói é de Nível Imortal");
}else if(experienciaDoHeroi >= 10001){
    console.log(nomeDoHeroi + " Seu Herói é de Nível Radiante");
}


