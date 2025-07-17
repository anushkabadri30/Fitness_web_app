import React from 'react'
import { Box} from '@mui/material';

import Calory from '../components/Calory';
import Weight from '../components/Weight';
import Activities from '../components/Activities';

const Activity = () => {
  


  return (
    <Box>
     <Calory />
     <Activities />
     <Weight />
    </Box>
  )
}

export default Activity