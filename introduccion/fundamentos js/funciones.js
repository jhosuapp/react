//FUNCIÓN TRADICIONAL

function holaMundo(){
    return "Hola mundo";
}

console.log(holaMundo());

//FUNCION DE FLECHA

const miFuncion = (name)=>{
    return `hola ${name}`;
}

console.log(miFuncion('Jhosua'));

//FUNCION DE FLECHA SIMPLIFICADA

const miFuncionSimplificada = ()=> `Hola amigo`;

console.log(miFuncionSimplificada());

//FUNCION DE FLECHA QUE RETORNA UN OBJETO 

const miFuncionJson = () => ({
    nombre : "jhosua",
    apellido : "penagos",
});

console.log(miFuncionJson());



