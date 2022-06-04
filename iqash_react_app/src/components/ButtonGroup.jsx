import {Button, ButtonGroup, Box} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const buttonGroup = {marginBlock: '1px'}
  
export default function GroupOrientation() {
  const navigate = useNavigate()

  const buttons = [
      <Button key="creditcard" onClick={() => { navigate("/creditcard") }} style={buttonGroup}>
        CREDIT CARD
      </Button>,
      <Button key="cryptocurrency" onClick={() => { navigate("/cryptocurrency") }} style={buttonGroup}> 
        CRYPTO CURRENCY
      </Button>,
      <Button key="paypal" onClick={() => { navigate("/paypal") }} style={buttonGroup}>
        PAYPAL
      </Button>,
      <Button key="klarna" onClick={() => { navigate("/klarna") }} style={buttonGroup}>
        KLARNA
      </Button>
    ];

  return (
    <Box
      // sx={{
      //   display: 'flex',
      //   '& > *': {
      //     m: 1,
      //   },
      // }}
    >
      <h3 >Select a Method for the Payment!</h3>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        color='info'
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

