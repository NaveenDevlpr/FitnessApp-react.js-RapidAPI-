import React from 'react'
import { useEffect,useState } from 'react'
import { Pagination,Stack,Typography ,Box} from '@mui/material'

import { fetchData,exerciseOptions } from '../utils/fetchData'
import ExCard from './ExCard'
const Exercises = ({setExercises,bodyPart,exercise}) => {

  const [currentPage,setCurrentPage]=useState(1)
  const exercisePerPage=9;

  const paginate=(e,val)=>{
    setCurrentPage(val)
    window.scroll({top:1800,behavior:'smooth'})
  }

  useEffect(() => {
    const fetchExerciseData=async()=>{
      let exerciseData=[]

      if(bodyPart==='all'){
        exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=50',
        exerciseOptions)
      }
      else{
        exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=30`,
        exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, [bodyPart])

  const indexOfLastExercise=currentPage*exercisePerPage;

  const indexOfFirstExercise=indexOfLastExercise-exercisePerPage;

  const currentExercise=exercise.slice(indexOfFirstExercise,indexOfLastExercise)

  return (
    <Box id="exercise"
    
    sx={{
      mt:{
        lg:'110px'
      }
    }}
    mt="50px"
    p="30px"

    >

    <Typography variant="h5" fontFamily={'Poppins'}
    fontSize="2rem" fontWeight={500}>
      Showing results :
    </Typography>

    <Stack
    mt="5rem"
    direction='row'
    sx={{
      gap:{
        lg:'110px',
        xs:'50px'
      }
    }}
    flexWrap="wrap"
    justifyContent="center"
    >
      {currentExercise.map((exercise,index)=>{
            
         return(
          <ExCard key={index} exercise={exercise}/>
         )
      })}
    </Stack>

    <Stack mt="100px" alignItems={'center'}>

      {exercise.length>9 &&(
      <Pagination
      color="standard"
      shape="rounded"
      defaultPage={1}
      count={Math.ceil(exercise.length/exercisePerPage)}
      page={currentPage}
      onChange={paginate}
      size='large'
      />
      )}

    </Stack>
    </Box>
  )
}

export default Exercises