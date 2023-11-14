import React from 'react'
import {Stack,Box, Typography} from '@mui/material'
import { useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchData, exerciseOptions} from '../utils/fetchData'
import Details from '../components/Details'

const ExcerciseDetail = () => {
    
const [exerciseDetails,setExerciseDetails]=useState({})

const {id}=useParams();


useEffect(() => {
const FetchExerciseData=async()=>{
  const exData=await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}}`,
    exerciseOptions
  )
 
  setExerciseDetails(exData);
}
FetchExerciseData();
}, [id])

  return (
    <Box>
        <Typography>Hiii</Typography>
      <Details exerciseDetail={exerciseDetails} />
    </Box>
  )
}

export default ExcerciseDetail