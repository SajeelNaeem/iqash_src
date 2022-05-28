import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';




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
  const [expirymonth, setExpirymonth] = React.useState('MM');
  const [expiryyear, setExpiryyear] = React.useState('YYYY');
  const [ownername, setOwnername] = React.useState('Max Müller');
  const [cvccode, setCvccode] = React.useState('');

  const [currency, setCurrency] = React.useState('EUR');
  const [amount, setAmount] = React.useState('0,00');

  

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

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  

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
          id="filled-select-currency-native"
          select
          label="Select Currency"
          value={currency}
          onChange={handleChange}
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
          value={amount}
          onChange={e => setAmount(e.target.value)}
          startAdornment={<InputAdornment position="start">{currency}</InputAdornment>}
          helperText="Please enter amount to send"
          variant="filled"
        >
          
        </TextField>
       
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
          id="expiry-month"
          label="Expiration Month"
          defaultValue = {expirymonth}
          variant="filled"
          onChange={e => setExpirymonth(e.target.value)}
        />
        <TextField
          required
          id="expiry-year"
          label="Expiration Year"
          defaultValue = {expiryyear}
          variant="filled"
          onChange={e => setExpiryyear(e.target.value)}
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
          expirymonth={expirymonth} expiryyear={expiryyear} ownername={ownername} 
          cvccode={cvccode} onConfirm={() => onConfirm(creditcardnumber)}
          />
      </Box>
    </Box>
  );
}






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useState } from 'react';

// export default function InputAdornments() {
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             label="Amount"
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="filled-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="filled"
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <FilledInput
//             id="filled-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="filled-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="standard"
//         />
//         <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
//           <Input
//             id="standard-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//     </Box>
//   );
// }
