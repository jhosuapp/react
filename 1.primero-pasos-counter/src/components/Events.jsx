import { useState } from "react";
import PropTypes from "prop-types";

export const EventClick = ({ initialState })=>{

    //Se renderiza el componente cuando cambia el estado
    console.log('render');

    const [ counter, setCounter ] = useState( initialState );
    
    const ClickEvent = ()=> setCounter( counter + 1 );
    const ClickEventResta = ()=> setCounter( counter - 1 );
    const ClickEventReset = ()=> setCounter( initialState );

    return (
        <>
            <h1>{ counter }</h1>
            <button onClick={ ClickEvent }>+1</button>
            <button onClick={ ClickEventResta }>-1</button>
            <button onClick={ ClickEventReset }>reset</button>
        </>
    )
}

EventClick.propTypes = {
    initialState: PropTypes.number.isRequired,
}