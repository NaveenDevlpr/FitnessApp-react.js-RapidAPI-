import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import bodyPartImage from '../assets/icons/body-part.png';
import equipmentImage from '../assets/icons/equipment.png';
import TargetImage from '../assets/icons/target.png';




const Details = ({exerciseDetail}) => {

const {bodyPart, gifUrl,name,target,equipment}=exerciseDetail;

  return (
    <Stack
    gap="60px"
    
    sx={{
        flexDirection:{
            lg:'row'
        },
        p:'20px',
        alignItems:'center'
    }}>

        <img src={gifUrl} alt="" className='detail-image'></img>

    </Stack>
  )
}

export default Details