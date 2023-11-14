import React from 'react'
import { Stack,Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
   
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    sx={{
        borderTop:bodyPart===item?'4px solid #ff2625':'',
        backgroundColor:"#fff",
        borderBottomLeftRadius:"20px",
        width:'270px',
        height:"270px",
        cursor:"pointer",
        gap:"40px"
    }}

    onClick={()=>{
        setBodyPart(item)
        window.scroll({top:1800,left:100,behavior:'smooth'})
    }}
    >
        <img src={Icon} alt='' 
        style={{
           
            width:'40px',
            height:'40px'
        }}
        />

        <Typography
        fontSize='1rem'
        fontFamily='Poppins'
        fontWeight='500'
        textTransform='capitalize'
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart