// a instrução for ( em português, "para") re aliza a 
//repetição de um bloco de código PARA um determinado
//nuúmero de iterações preestabelecidas.
// a sintaxe do for requer três expressões: 
//(1) inicialização - uma variável que receberá o valor de início;
//(2) teste - a condição de parada do laço;
//(3) incremento - a condição de incremento (ou decremento) aplicada ao final de cada rodada.

// for (início; condição de parada; passo){
    //comandos que serão repetidos
//};

for(i = 0; i < 5; i = i+1){
    console.log(i);
}

//podemos interpretar o código da seguinte maneira:
//PARA a variável i, iniciando em 0,
//ENQUANTO ela for menor do que 5, execute o bloco de código
//delimitado pelas chaves {} SOMANDO 1 a cada rodada.

//Cláusulas break e continue 
//Podemos alterar o fluxo de execução de um laço for usando as chamadas cláusulas de parada (break)
//e continuação (continue).No exemplo a seguir, repetimos o laço que imprime os números 0, 1, 2, 3 e 4, 
//entretanto, agora, utilizamos um comando condicional para analisar quando o valor de i for igual a 2.

for(i = 0; i < 5; i++){
    if(i == 2){ //se i é igual a 2
        break;  //pare imediatamente
    }
    console.log(i);
}

//Perceba que, no código apresentado, substituímos a expressão i = i+1 por apenas i++.
//Ambas as expressões têm o mesmo significado, sendo i++ uma forma contraída de notação usada para incrementar o valor de uma variável.
//ao executarmos esse código, só são impressos no console os números 0 e 1,
//e isso ocorre porque utilizamos a cláusula break para interromper a execução do laço quando a variável i for igual a 2,
//por isso, apenas os valores 0 e 1 são impressos.
//Poderíamos, ainda, utilizar a cláusula continue para saltar uma determinada iteração do bloco. Observe o exemplo a seguir:

for(i = 0; i < 5; i++){
    if(i == 2){     // se i é igual a 2
        continue;  //encerre a iteração atual
    }
    console.log(i);
}

//No código apresentado, a cláusula continue foi utilizada em um bloco condicional ativado para quando o valor da variável i for igual a 2.
//Nesse caso, quando i passou a valer 2, a linha 3 do script foi executada, ativando a cláusula continue.
//Essa cláusula interrompeu a execução atual do laço for e saltou para a próxima iteração
//a linha 5 não foi executada, o valor 2 não foi impresso, a variável i passou a valer 3 e o bloco do laço for foi repetido, mais uma vez.