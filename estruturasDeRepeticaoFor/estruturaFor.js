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