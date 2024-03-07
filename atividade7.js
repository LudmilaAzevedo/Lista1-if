/*
As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze.
Escreva um programa que leia o número de maçãs compradas,
calcule e escreva o valor total da compra.
Nome Aluno: Ludmila
*/
console.clear();
var teclado = require("prompt-sync")();
var quantidade = parseFloat(teclado("Digite a quantidades de ma\u00E7\u00E3s: "));
var precoPadrao = 0;
if (quantidade < 12) {
    precoPadrao = 0.3;
}
else {
    precoPadrao = 0.25;
}
var total = quantidade * precoPadrao;
console.log(" O Valor das ma\u00E7\u00E3s foram ".concat(total));
