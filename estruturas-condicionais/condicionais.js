//Se executarmos este código, veremos apenas a mensagem: Olá mundo!
//Isso ocorrerá porque os comandos emum bloco 
//só são executados se a condição é verdadeira.

if(true){
    console.log("Olá, mundo!");
}

if(false){
    console.log("Está mensagem não será executada");
}


//se x for um número par
x = 1;

if(x % 2 == 0){
    console.log("A variável x é um número par");
}

//Observe que, ao executarmos o código acima, 
//nada aparece no console, pois x não é um número par.
//Isso ocorre porque os comandos dentro do bloco 
//só são executados se a condição de entrada é verdadeira.


//se x for um número ímpar
x = 1;

if(x % 2 == 1){
    console.log("A variável x é um número ímpar");
}


//usamos duas expressões para avaliar a relação de 
//uma variável x igual a 5 e uma variável y igual a 3:
x = 5
y = 3

if((x < y) || (x % 2 == 1)){
    console.log("x é maior do que y OU x é um número ímpar");
}

//Podemos, ainda, avaliar expressões mais complexas organizando-as 
//usando parênteses além de operadores lógicos e relacionais.

//você pode adicionar quantas expressões quiser, 
//mas à medida que adicionar mais expressões, 
//o código se tornará mais complexo, o que poderá dificultar sua manutenção.

//executar o código da linha 40,41,42 é a mesma coisa que executar abaixo:

if(x <y){
    console.log("x é maior do que y OU x é um número ímpar")
}
if(x % 2 == 1){
    console.log("x é maior do que y OU x é um número ímpar")
}

//OBS: encadear muitos comandos if em sequência não é uma boa prática,
//uma vez que cada um será testado individualmente.


