

export const HelloWorld = () => {

    const ShowName = async()=>{
        setTimeout(()=>{
            return ['hola', 'chao', 'true'];
        }, 10000)
    }
    
    ShowName()
    .then(res =>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })



    const name = "Jhosua";
    const object = {
        nombre: name,
        apellido: "Penagos",
        edad: 20
    }
    const {nombre, apellido, edad} = object;

    return (
        <>
            <h1> mi nombre es { nombre } { apellido } y tengo { edad } </h1>
        </>
    );
};