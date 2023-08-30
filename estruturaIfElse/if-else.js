x = 1;

if(x % 2 == 0){
    console.log(x, " é par")
}
else{
    console.log(x, "é ímpar")
}


//Encadeando instruções if e else

x = 1;

if(x % 2 == 0){
    if(x > 0){
        console.log(x, "é um número par e positivo")
    }
    else{
        console.log(x, "é um número par e negativo")
    }
}
else{
    if(x > 0){
        console.log(x, "é um número ímpar e positivo")
    }
    else{
        console.log(x, "é um número ímpar e negativo")
    }
}