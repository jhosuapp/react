//DESESTRUTURACIÓN DE OBJETOS


const dataUser = {
    nombre : "Jhosua",
    apellido: "Penagos",
    edad : 20,
    profesion : "developer"
}


const {nombre, apellido, edad, profesion} = dataUser;


const getData = ({nombre, apellido, edad, profesion})=>{
    
    return {
        userName : "Jhosuapp",
        password : "1234",
        skills : {
            title : "enginer",
            experiencie: "2 years"
        }
    }

}

const {userName, password, skills:{title, experiencie}} = getData(dataUser);
// const { title, experiencie } = skills;
console.log(userName, password, title, experiencie);