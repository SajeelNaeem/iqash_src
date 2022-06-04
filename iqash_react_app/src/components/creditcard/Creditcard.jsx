import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import validation from './validationTextField';


const PaymentButtons = ({onConfirm}) => {
  return (
    <Box style={{marginTop:'40px'}}>
      <div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant="outlined" startIcon={<DeleteIcon />} style={{marginInlineEnd: '12px'}}>
            Cancel
          </Button>
        </ Link>
        <Button variant="contained" endIcon={<SendIcon /> }  onClick={onConfirm} >
          Confirm Payment
        </Button>
      </div>
    </Box>
  );
}

const TransactionResponse = ({response}) => {

  if(!!response) {
    if(response.result.code !== '00001'){
      return (
        <Alert severity="error">
          <AlertTitle><strong> Payment Unsuccessful </strong> </AlertTitle>
          {response.result.description} 
        </Alert>
      )
    }
  
    if(response.result.code === '00001'){
      return (
        <Alert severity="success">
          <AlertTitle><strong>Payment Successful</strong></AlertTitle>
            {response.result.description}
         </Alert>
      )
    }
  }
}


export default function CreditcardForm({onConfirm, response}) {
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    setError(error)
  }, [error]);

  const [payload, setPayload] = React.useState({
    creditcardnumber: '4111110000000021',
    expirymonth: '12',
    expiryyear: '2030',
    ownername: 'Max Müller',
    cvccode: '123',
    currency: 'USD',
    amount: '50.00'
  });

  const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
      };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

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
        <h3>Enter Credit Card Details and Amount!</h3>

        <TextField
          id="currency"
          select
          label="Select Currency"
          value={payload.currency}
          onChange={handleChange('currency')}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="amount"
          required
          label="Amount" 
          value={payload.amount}
          onChange={handleChange('amount')}
          startadornment={<InputAdornment position="start">{payload.currency}</InputAdornment>}
          variant="filled"
          error = {validation(payload.amount, 12, true)}
          helperText={validation(payload.amount, 12, true)? 
                        validation(payload.amount, 12, true): 
                        "Please enter amount to send"}
        >
        </TextField>
       
        <TextField
          required
          id="creditcard-number"
          label="Credit Card Number"
          defaultValue = {payload.creditcardnumber}
          variant="filled"
          onChange={handleChange('creditcardnumber')}
          error = {validation(payload.creditcardnumber, 16, true)}
          helperText={validation(payload.creditcardnumber, 16, true)? 
                        validation(payload.creditcardnumber, 16, true): 
                        "Enter 16 digits credit card number"}
        />
        <TextField
          required
          id="expiry-month"
          label="Expiration Month"
          defaultValue = {payload.expirymonth}
          variant="filled"
          onChange={handleChange('expirymonth')}
          error = {validation(payload.expirymonth, 2, true)}
          helperText={validation(payload.expirymonth, 2, true)? 
                        validation(payload.expirymonth, 2, true): 
                        "Enter month in MM format"}
        />
        <TextField
          required
          id="expiry-year"
          label="Expiration Year"
          defaultValue = {payload.expiryyear}
          variant="filled"
          onChange={handleChange('expiryyear')}
          error = {validation(payload.expiryyear, 4, true)}
          helperText={validation(payload.expiryyear, 4, true)? 
                        validation(payload.expiryyear, 4, true): 
                        "Enter year in YYYY format"}
        />
        <TextField
          required
          id="owner_name"
          label="Owner Name"
          defaultValue = {payload.ownername}
          variant="filled"
          onChange={handleChange('ownername')}
          error = {validation(payload.ownername, 30, false)}
          helperText={validation(payload.ownername, 30, false)? 
                        validation(payload.ownername, 30, false): 
                        "Enter Card Holder's Full Name. e.g: (FirstName MiddleName(if any) LastName)"}
        />
        <TextField
          required
          id="cvc-code"
          label="CVC Code"
          defaultValue={payload.cvccode} 
          variant="filled"
          onChange={handleChange('cvccode')}
          error = {validation(payload.cvccode, 3, true)}
          helperText={validation(payload.cvccode, 3, true)? 
                        validation(payload.cvccode, 3, true): 
                        "Enter 3 digit CVC code"}
        />
      </div>
      
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        >
          <PaymentButtons onConfirm={() => onConfirm(payload)} />
      </Box>

      <TransactionResponse response={response} />
    </Box>
  );
}
