const datosUsers = [
    {nombre: "jhosua", apellido: "penagos"},
    {nombre: "maria", apellido: "sanchez"},
    {nombre: "eddy", apellido: "perdomo"},
]

// const promise = new Promise((resolve, reject) => resolve(datosUsers));
    
// promise.then(res =>{
//     res.map((data)=>{
//         const {nombre, apellido} = data;
//         console.log(nombre, apellido);
//     });
// }).catch(err => {
//     console.log(err);
// });


const devolverDataId = (id)=> new Promise((resolve, reject)=> {
    const idUsers = datosUsers[id];
    if(idUsers){
        resolve(datosUsers[id]);
    }else{
        reject('ha ocurrido un error');
    }
});

devolverDataId(1)
    .then(console.log)
    .catch(console.warn)


