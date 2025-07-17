import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = (targetMuscleExercises,equipmentExercises) => {
  console.log(targetMuscleExercises);
  console.log(equipmentExercises);
  console.log(targetMuscleExercises.targetMuscleExercises.length);
  console.log(targetMuscleExercises.equipmentExercises.length);
  // if(!targetMuscleExercises.targetMuscleExercises.length) return 'Loading...';
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
     <Typography variant='h3'mb={5}>
      Exercises that target the same muscle group
     </Typography>
     <Stack direction={"row"} sx={{p:'2',position:'relative'}}>
      {targetMuscleExercises.targetMuscleExercises.length?
      <HorizontalScrollbar data={targetMuscleExercises.targetMuscleExercises}/>
      :<Loader/>
     }

     </Stack>
     <Typography variant='h3'mb={5}>
      Exercises that use the same equipment
     </Typography>
     <Stack direction={"row"} sx={{p:'2',position:'relative'}}>
      {targetMuscleExercises.equipmentExercises.length?
      <HorizontalScrollbar data={targetMuscleExercises.equipmentExercises}/>
      :<Loader/>
     }

     </Stack>
     
    </Box>
  )
}

export default SimilarExercises