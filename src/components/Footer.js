import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
import Logo from '../assets/images/gym.jpg'

const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f4"}>
    <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"40px"}>
     <img src={Logo}  alt='logo' width={"200px"} height={"200px"}/>
     <Typography variant="h6" color={"#ff2625"} mt={"-40px"}>𝐖𝐞 𝐆𝐨 𝐆𝐲𝐦</Typography>
     <Typography variant='h5' pb={"40px"} mt={"20px"}>
      Copyright &copy; 2021 All rights reserved | This website is made with React and Hardwork...
     </Typography>
    </Stack>
    </Box>
  )
}

export default Footer