import { Grid2, Typography } from '@mui/material'
import React from 'react'

function Cart() {
  return (
    <Grid2 p={5} textAlign={'center'}>
    <Typography sx={{background:"#2ea3f2",color:"#fff", fontSize:"1.3rem", p:1}} >Your basket is currently empty.</Typography>
    </Grid2>
  )
}

export default Cart
