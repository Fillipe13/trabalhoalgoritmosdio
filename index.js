let heroi = Zeus
let xP = prompt("Digite a experiência em XP do nosso herói: ")

if (xP < 1000){
    console.log("O nosso herói" + heroi + "está no nível Ferro")
}
else if (xP > 1000 && <= 2000){
    console.log("O nosso herói" + heroi + "está no nível Bronze")
}
else (xP >= 2001 ){
    console.log("O nosso herói" + heroi + "está no nível Ouro")
}

