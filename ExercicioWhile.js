//Peça dois números
let inicio = 30;
let fim = 35;

//Condição com if
if (inicio <= fim) { //Se o inicio for menor ou igual ao fim
    while(inicio <= fim){ //Enquanto o inicio for menor ou igual ao fim
    console.log (inicio); //Exibo o inicio
    inicio++; //Adiciono mais 1 no inicio
    }
}else{ //Senão
    while (inicio >= fim){ //Enquanto inicio for maior ou igual ao fim
    console.log (fim); //Exibo o fim
    fim++ //Adiciono mais 1 no fim
    }
}
//Exibo que terminou e um ponto de exclamação
console.log ("Terminou!");

console.log ("Parabéns!");