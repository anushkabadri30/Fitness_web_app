import React,{useState} from 'react'
import { MenuItem,Menu,Select } from '@mui/material'
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { fetchData, BMIOptions } from '../utils/fetchData';
import Loader from '../components/Loader'
import swal from 'sweetalert';

const Weight = () => {
  const [gender, setGender] = useState('male');
  const [height, setheight] = useState('')
  const [weight, setweight] = useState('Not calulated')

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    // You can perform additional actions based on the selected gender here
  };

  const fetchweight= async() =>{
    if(height>=1&&height<=230){  
    const weightData = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`, BMIOptions);
    //setLoading(true); 
   
    if(weightData.status_code === 200){
        console.log(weightData);
        setweight(weightData.data);
        console.log(typeof weightData);
        
    }else{
        alert('Unable to fetch data from API');
    }                       
    //window.scrollTo({top: 1400, behavior: 'smooth'});
}
else{
    //alert('Please enter valid values');
    swal({
      title: "enter valid values",
      
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
}

}
  return (
    <div>
           <Stack p="80px" gap="30px" backgroundColor="#FFF" width="90%" margin="auto" mt="100px" >
            <Typography variant='h5'>Calculate Your Ideal weight</Typography>
            <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
          <TextField type="number"  placeholder='Your height in cm(must be 130 to 230 in range)' onChange={(e)=> setheight(e.target.value) } />
          <Button variant="contained" color="primary" onClick={fetchweight} >Calculate </Button> 
     </Stack>

     <Box>
      {weight==="Not calulated" ? <Loader/> :
      Object.keys(weight).map((item)=>(
        <Typography key={item} >
        <span style={{ margin: '10px', fontSize: '26px', fontWeight: 'bold', color: '#333',fontFamily:"serif",textTransform:"capitalize" }}>{item}:</span>
        <span style={{fontSize:'23px'}}>{weight[item]} </span>
        </Typography>
      ))
}
     </Box>

    </div>
  )
}

export default Weight