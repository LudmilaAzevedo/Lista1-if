"use strict";
/*
Crie um programa que peça um número ao usuário e armazene ele na variável x.
Depois peça outro número e armazene na variável y.Mostre esses números.
Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome: Ludmila
*/
Object.defineProperty(exports, "__esModule", { value: true });
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite o valor de x: "));
var y = parseFloat(teclado("Digite o valor de y: "));
var z = 0;
console.log("O valor de x \u00E9 ".concat(x, " o valor de y \u00E9 ").concat(y));
z = x;
x = y;
y = z;
console.log("O valor de y \u00E9 ".concat(x, " e o valor de x \u00E9").concat(z));
