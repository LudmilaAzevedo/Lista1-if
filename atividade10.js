console.clear();
var teclado = require("prompt-sync")();
var resposta1 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta2 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta3 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta4 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var resposta5 = parseFloat(teclado("Digite 1 pra sim ou 0 n\u00E3o: "));
var interrogatorio = 0;
if (resposta1 == 1) {
    interrogatorio++;
}
if (resposta2 == 1) {
    interrogatorio++;
}
if (resposta3 == 1) {
    interrogatorio++;
}
if (resposta4 == 1) {
    interrogatorio++;
}
if (resposta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeita");
}
else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Cúmplice");
}
else if (interrogatorio == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
