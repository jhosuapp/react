//DESESTRUCTURACIÓN DE ARREGLOS


//INGRESAR A LOS VALORES DE MANERA TRADICIONAL
const array = ["js", "css", "python"];
console.log(array[0], array[1], array[2]);


//INGRESAR A LOS VALORES POR MEDIO DE LA DESESTRUCTURACIÓN
const [ leng1, leng2, leng3 ] = array;
console.log(leng1, leng2, leng3);


//FUNCION FLECHA QUE RETORNA UN ARREGLO
const returnArray = (nombre)=> {
    return [nombre, ()=>{ alert(`Hola ${nombre}`)}]
}

let [nombre, setNombre] = returnArray("jhosua");

setNombre();

console.log(nombre);
