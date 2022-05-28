import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';



const PaymentButtons = ({creditcardnumber, expirydate, ownername, cvccode, onConfirm}) => {
  return (
    <Box style={{marginTop:'40px'}}>
      <div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant="outlined" startIcon={<DeleteIcon />} style={{marginInlineEnd: '12px'}}>
            Cancel
          </Button>
        </ Link>
        <Button variant="contained" endIcon={<SendIcon /> }  onClick={onConfirm}>
          Confirm Payment
        </Button>
      </div>
    </Box>
  );
}


export default function CreditcardForm({onConfirm}) {

  const [creditcardnumber, setCreditcardnumber] = React.useState('123456789');
  const [expirydate, setExpirydate] = React.useState('MM/YY');
  const [ownername, setOwnername] = React.useState('Max Müller');
  const [cvccode, setCvccode] = React.useState('');

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <div>
        <h3>Enter Credit Card Details!</h3>
        <TextField
          required
          id="creditcard-number"
          label="Card Number"
          defaultValue = {creditcardnumber}
          variant="filled"
          onChange={e => setCreditcardnumber(e.target.value)}
        />
        {/* <console className="log"> { creditcardnumber} </console> */}
        <TextField
          required
          id="expiry-date"
          label="Expiration Date"
          defaultValue = {expirydate}
          variant="filled"
          onChange={e => setExpirydate(e.target.value)}
        />
        <TextField
          required
          id="owner_name"
          label="Owner Name"
          defaultValue = {ownername}
          variant="filled"
          onChange={e => setOwnername(e.target.value)}
        />
        <TextField
          required
          id="cvc-code"
          label="CVC Code"
          autoComplete = {cvccode}
          variant="filled"
          onChange={e => setCvccode(e.target.value)}
        />
      </div>
      
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        >
        <PaymentButtons creditcardnumber={creditcardnumber} 
          expirydate={expirydate} ownername={ownername} 
          cvccode={cvccode} onConfirm={onConfirm}
          />
      </Box>
    </Box>
  );
}
