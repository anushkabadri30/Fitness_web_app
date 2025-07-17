import React,{useState} from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { fetchData, BMIOptions } from '../utils/fetchData';
import Loader from '../components/Loader'
import swal from 'sweetalert';

const Activities = () => {
const [intensitylevel, setintensitylevel] = useState(0)
const [Loading, setLoading] = useState(false)
const [activity, setactivity] = useState([])



  const fetchactivity= async() =>{
    if(intensitylevel>=1&&intensitylevel<=6){  
    const activitiesData = await fetchData(`https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=${intensitylevel}`, BMIOptions);
    setLoading(true); 
   
    if(activitiesData.status_code === 200){
        console.log(activitiesData);
        setactivity(activitiesData.data);
        console.log(typeof activitiesData);
        
    }else{
        alert('Unable to fetch data from API');
    }                       
    window.scrollTo({top: 2000, behavior: 'smooth'});
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

const randomActivities = activity.sort(() => Math.random() - 0.5).slice(0, 10);
console.log(randomActivities)
  return (
    
    <div>
     
         <Stack p="80px" gap="30px" backgroundColor="#FFF" width="90%" margin="auto" mt="100px" >
            <Typography variant='h5'>Calculate Your activitylevel</Typography>
        <TextField type="number"  placeholder='Your level(must be 1 to 6 in range)' onChange={(e)=> setintensitylevel(e.target.value) } />
       
        <Button variant="contained" color="primary" onClick={fetchactivity} >Calculate </Button> 
        </Stack>

        <Box>
       
  {Object.keys(activity).length>0 ? (
    
   randomActivities.slice(0,10).map((item) => (
      <div key={item._id}>
        
        <Typography  style={{ margin: '10px', fontSize: '16px', fontWeight: 'bold', color: '#ff2625' }}>
          Activity:<span style={{ margin: '10px', fontSize: '16px', fontWeight: 'bold', color: '#333',fontFamily:"serif",textTransform:"capitalize" }}>{item.activity}</span></Typography>
        <Typography  style={{ margin: '10px', fontSize: '16px', fontWeight: 'bold', color: '#17a2b8' }}>
          Description: <span  style={{textTransform:"capitalize", margin: '10px', fontSize: '16px', fontWeight: 'bold', color: '#333',fontFamily:"serif" }}>{item.description}</span></Typography>
      </div>
    ))
  ) : (
    <Loader />
  )}

</Box>

        </div>
  )
}

export default Activities