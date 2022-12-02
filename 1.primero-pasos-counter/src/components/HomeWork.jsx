

export const HelloWorld = () => {

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