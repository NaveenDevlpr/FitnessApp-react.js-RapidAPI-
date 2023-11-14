import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
    
    
    sx={{
        mt:{
            lg:'180px',
            xs:'70px',
            sm:'120px'
        },
        ml:{
            sm:'60px',
            xs:'60px'
        },
        position:'relative',
        p:'20px'
    }}
    >
        <Typography 
        color="#FF2625"
        fontWeight="600"
        fontFamily='Poppins'
        fontSize='1.5rem'
        >
            Fitness Club
        </Typography>

        <Typography
        
        fontWeight='700'
        fontFamily='poppins'
        mb='23px'
        mt='30px'
        sx={{
            fontSize:{
                lg:'45px',
                sm:'35px',
                xs:'28px'
            },
        
        }}
        >
            Sweat , Smile <br/> and Repeat
        </Typography>

        <Typography
        
        fontSize='18px' 
        lineHeight='50px' 
        fontFamily='poppins'
        mb={5}
        >
            Check out the most efficient workouts.
        </Typography>

        <Button 
        
        sx={{
            color:'#FF2625',
            border:'2px solid #FF2625',
            padding:'5px 10px',
           
        }}
        href="#exercises"
        > Explore</Button>

        <Typography
        
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        mt='40px'

        sx={{
            opacity:'0.1',
            display:{
                lg:'block',
                xs:'none'
            }

        }}

        >
            Excercise
        </Typography>



        <img src={HeroBannerImage} alt=''  className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner