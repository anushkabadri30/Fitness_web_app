import React,{useState}from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { fetchData, BMIOptions } from '../utils/fetchData';
import Loader from '../components/Loader';
import { MenuItem,Menu,Select } from '@mui/material'
import swal from 'sweetalert';

const Calory = () => {
    const [age, setage] = useState()
    const [gender, setgender] = useState('male')
    const [height, setheight] = useState()
    const [weight, setweight] = useState()
    const [activtylevel, setactivtylevel] = useState('level_1')
    const [loading, setLoading] = useState(false);
    const [bmi,setbmi] = useState([]);
    const { BMR, goals } = bmi;

    const handleActivityChange = (event) => {
      setactivtylevel(event.target.value);
      // You can perform additional actions based on the selected gender here
    };

    const fetchcalory= async() =>{
        if( (weight >= 40 && weight < 160) && (height >=130 && height < 230) && (age > 0 && age < 80) &&(gender=='male'|| gender=='female')){  
        const caloryData = await fetchData(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activtylevel}`, BMIOptions);
        setLoading(true); 
       
        if(caloryData.status_code === 200){
            console.log(caloryData.data);
            setbmi(caloryData.data);
            console.log(typeof bmi);
            
        }else{
            alert('Unable to fetch data from API');
        }                       
        window.scrollTo({top: 1400, behavior: 'smooth'});
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
            <Typography variant='h5'>Calculate Your Daily Calories Needed</Typography>
        <TextField type="number"  placeholder='Your Age(must be 0 to 80 in range)' onChange={(e)=> setage(e.target.value) } />
        {/* <TextField type="text" placeholder='male or female' onChange={(e)=> setgender(e.target.value) } /> */}
        <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            onChange={(e)=> setgender(e.target.value) }
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        <TextField type="number" placeholder='Your Height in CM (must be 130cm to 230cm in range)' onChange={(e)=> setheight(e.target.value) }  />
        <TextField type="number" placeholder='Your Weight in Kg(must be 40kg to 160kg in range)' onChange={(e)=> setweight(e.target.value) }  />
        {/* <TextField type="text" placeholder='leve_1 to level_6' onChange={(e)=> setactivtylevel(e.target.value) }  /> */}
        <Select
            labelId="activity-label"
            id="activity"
            value={activtylevel}
            onChange={handleActivityChange}
          
          >
            <MenuItem value="level_1">level_1</MenuItem>
            <MenuItem value="level_2">level_2</MenuItem>
            <MenuItem value="level_3">level_3</MenuItem>
            <MenuItem value="level_4">level_4</MenuItem>
            <MenuItem value="level_5">level_5</MenuItem>
            <MenuItem value="level_6">level_6</MenuItem>
           
          </Select>
        <Button variant="contained" color="primary" onClick={fetchcalory} >Calculate calories</Button>                
    </Stack>


    {Object.keys(bmi).length > 0 ? (
      <Stack p="80px" gap="30px" backgroundColor="#FFF" width="90%" margin="auto" mt="100px">
        <Typography variant="h3">Ideal calories</Typography>

        <Box>
          <Typography variant="h5">BMR: {BMR}</Typography>
          <Typography variant="h5">Goals:</Typography>
          
          {/* Display goals using Object.keys */}
          <ul>
  {Object.keys(goals).map(goalKey => (
     goalKey != 'maintain weight' && (
    <li key={goalKey}  style={{fontSize: '20px'}}>
      <span style={{ textDecoration: 'underline' }}>{goalKey}</span>:
     {/* {goalKey}: */}
      <ol>
        {Object.keys(goals[goalKey]).map(subgoalKey => (
          <li key={subgoalKey} style={{ margin: '10px', fontSize: '16px', fontWeight: 'bold', color: '#ff2625',fontFamily:"serif",textTransform:"capitalize" }}>
         {subgoalKey}:- {goals[goalKey][subgoalKey]}
          </li>
        ))}
      </ol>
      
    </li>
     )
  ))}
</ul>


        </Box>
      </Stack>
    ) :<Loader/>}



    </div>
  )
}

export default Calory