import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip, Typography, Avatar }  from '@material-ui/core/';


const Car = (props) => {
    const id = parseInt(props.match.params.id); 

    const foundCar = [];
    
    for(let i = 0; i < cars.length; i++){
        let currentCar = cars[i]; 
        if(currentCar.id === id){
            foundCar.push(currentCar)
        } 
    }

    return (
        <div>
            <Container maxWidth="sm" >
                <Paper variant="outlined" elevation={10} >
                    <Typography component="div" style={{ backgroundColor: '#F0F3F4', height: '50vh', marginTop: '100px', textAlign: 'center' }} >
                        <h2 style={{paddingTop: '40px', textAlign: 'center'}}>{foundCar[0].Name}</h2>
                        <Chip label={`id: ${foundCar[0].id}`} />
                        <Chip label={`Name: ${foundCar[0].Name}`} />
                        <Chip label={`MPG: ${foundCar[0].Miles_per_Gallon}`} />
                        <Chip label={`Cylinders: ${foundCar[0].Cylinders}`} />
                        <Chip label={`Displacement: ${foundCar[0].Displacement}`} />
                        <Chip label={`Horsepower: ${foundCar[0].Horsepower}`} />
                        <Chip label={`Weight in lbs: ${foundCar[0].Weight_in_lbs}`} />
                        <Chip label={`Acceleration: ${foundCar[0].Acceleration}`} />
                        <Chip label={`Year: ${foundCar[0].Year}`} />
                        <Chip label={`Origin: ${foundCar[0].Origin}`} />
                    </Typography>
                </Paper>
            </Container>
        </div> 

    )
}

export default Car