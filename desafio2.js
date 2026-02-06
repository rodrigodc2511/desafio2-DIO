// Calculadora de partidas Rankeadas


const prompt = require('prompt-sync')(); 


let totalVitorias = 0
let totalDerrotas = 0
let saldo = 0
let nivelExperiencia = " "
let continuarJogo = "s"

const mensagemEntradaVitorias = "Digite a quantidade de vitórias de seu herói: ";
const mensagemEntradaDerrotas = "Digite a quantidade de derrotas de seu herói: ";



console.log("Bem-vindo à calculadora de partidas Rankeadas!")

do{
    totalVitorias = parseInt(prompt(mensagemEntradaVitorias));
    totalDerrotas = parseInt(prompt(mensagemEntradaDerrotas));

    while(totalVitorias<0 || totalDerrotas<0 ){

        console.log("A entrada de dados não pode ser negativa. Por favor, digite um valor válido.");
        totalVitorias = parseInt(prompt(mensagemEntradaVitorias));
        totalDerrotas = parseInt(prompt(mensagemEntradaDerrotas));
        
    }
    
     nivelExperiencia = verificaNivelVitoriasDerrotas(totalVitorias);
     saldo = calculaSaldoVitoriasDerrotas(totalVitorias, totalDerrotas);
     


    console.log("\nO Herói tem um saldo de " + saldo + " e está no nível de " +nivelExperiencia)
    continuarJogo = prompt("\nDeseja continuar jogando? (s/n) :").toLowerCase()

    while(continuarJogo !== "s" && continuarJogo !== "n"){
        continuarJogo = prompt("\n\nEntrada inválida. Por favor, digite 's' para sim ou 'n' para não: ").toLowerCase()
    }

    saldo = 0
    nivelExperiencia = " "

}while(continuarJogo === "s")


console.log("\nFim  do jogo !\n\n");    



// Função  que calcula o saldo entre vitórias e derrotas

function calculaSaldoVitoriasDerrotas(vitorias, derrotas){
    const saldo = vitorias - derrotas;
    return saldo;   
}


// Função que verifica o nível do herói com base no número de vitórias

function verificaNivelVitoriasDerrotas(vitorias){

    if(vitorias < 10){
        return "Ferro";
    } else if(vitorias >= 11 && vitorias <= 20){
        return "Bronze";
    } else if(vitorias >= 21 && vitorias <= 50){
        return "Prata";
    } else if(vitorias >= 51 && vitorias <= 80){
        return "Ouro";
    } else if(vitorias >= 81 && vitorias <= 90){
        return "Diamante";
    } else if(vitorias >= 91 && vitorias <= 100){
        return "Lendário";
    } else {
        return "Imortal";
    }
}
 
