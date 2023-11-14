import React from 'react'
import { useState } from 'react'
import { Stack,Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {

  const [bodyPart,setBodyPart]=useState('all');
  const [exercise,setExercise]=useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises
        setExercises={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
        <Exercises
         setExercises={setExercise}
         bodyPart={bodyPart}
         exercise={exercise}
        />
    </Box>
  )
}

export default Home