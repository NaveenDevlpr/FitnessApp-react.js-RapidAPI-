import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExcerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
   
      <Box  width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/excercises/:id' element={<ExcerciseDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
  
    
  )
}

export default App;
