import { Fragment } from "react"
import PropTypes from "prop-types"
import { useState } from 'react'



export  function CounterApp ({ value }) {

    const [ counter, setCounter ] = useState ( value );

    const handleAdd = () => {
        // setCounter( counter + 1 )
        // o
        setCounter( (c) => ( c + 1 ))
    }

    const handleSubstract = () => {
        // setCounter( counter + 1 )
        // o
        setCounter( (c) => ( c - 1 ))
    }

    const handleReset = () => {
        // setCounter( counter + 1 )
        // o
        setCounter( value )
    }

    return (
    <Fragment>  
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    <button onClick={ handleAdd }> +1 </button>
    <button onClick={ handleSubstract }> -1 </button>
    <button onClick={ handleReset }> Reset </button>


    </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
