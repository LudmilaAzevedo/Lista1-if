console.clear();

const teclado = require(`prompt-sync`)();

let resposta1: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta2: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta3: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta4: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));
let resposta5: number = parseFloat(teclado(`Digite 1 pra sim ou 0 não: `));

let interrogatorio: number = 0;

if (resposta1 == 1){
    interrogatorio++;
}
if (resposta2 == 1){
    interrogatorio++;
}
if (resposta3 == 1){
    interrogatorio++;
}
if (resposta4 == 1){
    interrogatorio++;
}
if (resposta5 == 1){
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
} else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
} else if (interrogatorio == 5) {
    console.log("Assassino");
} else {
    console.log("Inocente");
}