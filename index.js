// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let heroi = Zeus
let xP = prompt("Digite a experiência em XP do nosso herói: ")

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 5.001 e 7.000 = Ouro


if (xP < 1000){
    console.log("O nosso herói" + heroi + "está no nível Ferro")
}
else if (xP > 1000 && <= 2000){
    console.log("O nosso herói" + heroi + "está no nível Bronze")
}
else (xP >= 2001 ){
    console.log("O nosso herói" + heroi + "está no nível Ouro")
}

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**""
