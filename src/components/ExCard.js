import { Stack ,Button,Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const ExCard = ({exercise}) => {
  return (
    <Link to={`/exercises/${exercise.id}`}  className='exercise-card'>
        <img src={exercise.gifUrl} alt=" " loading="lazy"></img>

        <Stack direction={'row'}>
                <Button 
                sx={{
                    ml:'20px',
                    color:"#fff",
                    background:'#ffa9a9',
                    fontSize:"14px",
                    borderRadius:'15px',
                    textTransform:'capitalize',
                    height:'30px',
                    fontFamily:"Poppins"

                }}
                
                >
                    {exercise.bodyPart}</Button>    
                <Button 
                sx={{
                    ml:'20px',
                    color:"#fff",
                    background:'#fcc757',
                    fontSize:"14px",
                    borderRadius:'15px',
                    textTransform:'capitalize',
                    height:"30px",
                    fontFamily:"Poppins"

                }}
                >{exercise.target}</Button> 
        </Stack>
        <Typography textTransform={'capitalize'}
        ml="20px" fontSize={'1.25rem'} color="#000" fontWeight="600" mt="10px" fontFamily={'Poppins'}>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExCard