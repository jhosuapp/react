import PropTypes from 'prop-types';

export const PropsReact = ( { name, age, defaultProp } )=>{

    return (
        <>
            <div className="prop-react"></div>
            <h1>PROPS EN REACT</h1>
            <h2>Hola mi nombre es { name } y tengo { age } años { defaultProp }</h2>
        </>
    )
}

PropsReact.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    defaultProp: PropTypes.string,
};

PropsReact.defaultProps = {
    defaultProp: "Soy una propiedad que viene por defecto",
};