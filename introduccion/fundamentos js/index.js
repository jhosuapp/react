calculateAverage = (arr)=> arr.reduce((a, b) => a + b, 0) / arr.length;

//CALCULAR PROMEDIO DE UN ARRAY
const calculateProm = [1, 2, 3, 4, 5];
console.log(calculateAverage(calculateProm)); // ME DA UN PROMEDIO DE 3



const myArr = [0, 1, 2];
//NO MUTA EL ARRAY PRINCIPAL, POR LO TANTO HABRÍA QUE 
//CREAR UNA NUEVA VARIABLE CON EL NUEVO ARREGLO
[...myArr, 3, 4, 5];
//CREAMOS LA VARIABLE
const newMyArr = [...myArr, 3, 4, 5];
console.log(newMyArr); // RETORNA EL ARRAY CON LOS NUEVOS ELEMENTOS



const arrCars = ["mazda", "toyota", "bmw", "ferrari"];
//RETORNAR EL ULTIMO ELEMENTO DE UN ARRAY
console.log(arrCars.at(-1));


const myFruit = ["manzana", "pera", "banano"];
//CLONAMOS EL ARRAY MYFRUIT PERO YA NO MUTA AL PADRE
const cloneMyFruit = [...myFruit];

console.log(cloneMyFruit);