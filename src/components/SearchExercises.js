import React from 'react'
import { useEffect ,useState} from 'react'
import { Box,Stack,Button,TextField,Typography } from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScroll from './HorizontalScroll'
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {


  const [search,setSearch]=useState('');
  
  const [body,setBody]=useState([]);

  useEffect(() => {
    const fetchExercise=async()=>{
      const data=await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        )
        
        setBody(['all',...data]);
    }
    fetchExercise();
  
  }, [])


  const handleSearch=async()=>{
      if(search){
        const exerciseDetails=await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=50',
          exerciseOptions

        );
        setSearch('');
        setExercises(exerciseDetails);
         /*  const SeachedData=exerciseDetails.filter(
          (exercise)=>{
            exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodypart.toLowerCase().includes(search)
          }
        );
           setSearch('');
           setExercises(SeachedData);
           */
      }
  }

  return (
    <Stack
    alignItems='center'
    justifyContent='center'
    mt='40px'
    p='20px'
    
    >

      <Typography
      
      fontWeight='700'
      sx={{
        fontSize:{
          lg:'40px',
          xs:'30px',
          
        }
      }}

      textAlign='center'
      mb='50px'
      fontFamily={'Poppins'}
      > Awesome Exercises You <br/>Should Know
      </Typography>

        <Box
        position='relative'
        mb='70px'
        >
          <TextField
          height='70px'
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          value={search}
          type='text'
        
          sx={{
            input:{
              fontWeight:'700',
              border: '0',
              outline:'0',
              fontFamily:'Poppins'
            },
            width:{
              lg:'800px',xs:'350px',sm:'550px'
            },
            background: '#fff',
            borderRadius:'50px'
          }}
          />

            <Button className='search-btn'
                onClick={handleSearch}
                  sx={{
                    background:"#ff2625",
                    textTransform:'none',
                    color:'#fff',
                    width:{
                      lg:'150px',xs:'80px',
                      sm:'120px'

                    },
                    fontSize:{
                      lg:'20px',xs:'14px'
                    },
                    height:'56px',
                    position:'absolute',
                    right:'0'
                  }}
            >
              Search
            </Button>
        </Box>

          <Box
          sx={{
            position:"relative",
            width:"100%",
            p:"20px"
          }}
          >
            <HorizontalScroll 
            data={body}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            
            />

          </Box>

    </Stack>
  )
}

export default SearchExercises