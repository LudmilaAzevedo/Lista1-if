/*
 Faça um programa que calcule e apresente o valor do volume de uma lata, 
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, 
 utilize a fórmula VOLUME = PI 
 Nome: Ludmila
 */
 
 let teclado = require (`prompt-sync`)();
 let raio: number = parseFloat(teclado(`Digite o valor do raio:`));
 let altura: number = parseFloat(teclado(`Digite o valor da altura: `));
let resultado: number = 3.14 * (raio * raio) * altura

console.log(`resultado é ${resultado}`);
 

 