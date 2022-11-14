const arreglo = [1, 2, 3, 4];
const arregloTwo = [...arreglo, 5];

let multiplicacionArreglo = arreglo.map((data)=>{
    return data * 2;
});

console.log(arreglo);

console.log(multiplicacionArreglo);
// multiplicacionArreglo();
