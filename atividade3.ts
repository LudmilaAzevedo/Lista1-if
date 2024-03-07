/*
Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome: Ludmila
*/

let teclado = require (`prompt-sync`)();
let letra = teclado(`Digite uma letra: `);
if (letra == `A`|| letra == `a` || letra == `E` || letra == `e` || letra == `I` || letra == `i` || letra == `O` 
|| letra == `o` || letra == `U` || letra == `u`) {
    console.log(`A letra digitada "${letra}" é uma vogal`);
}
else {
    console.log(`A letra digitada "${letra}" é uma consoante`);
}
