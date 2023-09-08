//ESTRUTURA DE REPETIÇÃO WHILE
//A estrutura de repetição while,(“enquanto”)
//repete um bloco de código ENQUANTO uma determinada condição for verdadeira. 

//declarar variável de entrada
//while(condição de parada){
    //comando 1
    //comando 2
    //...
    //comando n

    //incrementar variável de entrada
//}

var i = 0  //declaração do valor de início

while(i < 5){        //condição de parada 
    console.log(i);  //imprime os dados na tela
    i++;             //incrementação: +1  
}

//ESTRUTURA DE REPETIÇÃO DO WHILE (FAÇA...ENQUANTO)
//também executa um bloco enquanto uma condição é verdadeira, assim como o comando while, 
//entretanto, do... while garante que o bloco de código seja executado pelo menos uma vez, 
//enquanto um bloco do tipo while pode não ser executado caso a condição seja inicialmente falsa.

//declarar variável de entrada

//do{
    //comando 1
    //comando 2
    //...
    //comando n

    //incrementar variável de entrada

//}while(condição de parada)

//Note que o teste condicional de parada é realizado ao final da execução do bloco.

i = 0  //declaração do valor de início

do{
    console.log(i); //imprime os dados na tela
    i++;            //incrementação: +1
}while(i < 5);     //condição de parada