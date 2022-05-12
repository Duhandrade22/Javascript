let valores = [2, 7, 5, 4, 6, 8]

console.log(valores)


/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//FOR para arrays

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

