//Peça dois números
let inicio = 30;
let fim = 35;

//Condição com if
if (inicio <= fim) { //Se o inicio for menor ou igual ao fim
    while(inicio <= fim){ //Enquanto o inicio for menor ou igual ao fim
    console.log (inicio);
    inicio++;
    }
}else{ //Senão
    while (inicio >= fim){
    console.log (fim);
    fim++
    }
}
//Exibo que terminou
console.log ("Terminou!");