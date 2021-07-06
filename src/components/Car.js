import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const { id } = props.match.parms.id
    
    return (
        <h1>A specific car</h1>
    )
}

export default Car