/*
 Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Ludmila
*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o segundo número: `));
let media: number = 0;
media = (nUm+nDois)/2;

let nota;
if(media >=8.5 && nUm>=0 && nUm<=10 && nDois>=0 && nDois<=10){
  nota = (`A`);
}
else if(media >=7 && media<8.5){
  nota = (`B`);
}
else if(media >=5 && media<7){
  nota = (`C`);
}
else if(media >=3 && media<5){
  nota = (`D`);
}
else if(media < 3 && nUm >=0 && nUm <=10 && nDois>=0 && nDois<=10){
  nota = (`E`);
}
else{
  nota = (`nota inválida`);
}
console.log(`A media das notas serão ${media} e sua nota ${nota}`);