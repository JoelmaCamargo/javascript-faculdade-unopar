//Operadores lógicos

x = 1;
y = 2;

//console.log(x < y)

// &&
//condição 1 E condição 2
console.log((x < y )&&(y % 2 == 0)) //true
console.log((x < y )&&(y % 2 == 1)) //false

//OR ||
console.log((x < y )||(y % 2 == 1)) //true

//NOT !
console.log(!(x < y)) //false

console.log((x < y))&&((x % 2 ==0)||((y % 2 == 0))) //true
