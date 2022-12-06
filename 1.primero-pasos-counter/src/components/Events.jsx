import { useState } from "react";
import PropTypes from "prop-types";

export const EventClick = ({ initialState })=>{

    let [ counter, setCounter ] = useState(initialState);
    let counterMutado = 0;
    const ClickEvent = ()=>{
        setCounter( counter + 1 );
    }

    return (
        <>
            <h1>Da click aquí</h1>
            <button onClick={ ClickEvent }>Click + { counter }</button>
        </>
    )
}

EventClick.propTypes = {
    initialState: PropTypes.number.isRequired,
}