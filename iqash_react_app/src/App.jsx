import React from 'react';
import './App.css';
import ButtonGroup from './components/ButtonGroup'
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from '@mui/material';
import CreditcardController from './controllers/CreditcardController';
import Cryptocurrency from './components/cryptocurrency/Cryptocurrency';
import Paypal from './components/paypal/Paypal';
import Klarna from './components/klarna/Klarna';
import Products from './components/ProductsPage';
import Pricing from './components/PricingPage';
import Error from './components/Error';



function App() {
 
  return (
    <Container maxWidth='xl'>
      <Router>
        <div className="App">
          <header className="App-header">
            <NavigationBar />
            <Routes>
              <Route exact path="/" element={<ButtonGroup />}/>  
              <Route exact path="/creditcard" element={<CreditcardController />}/>
              <Route exact path="/cryptocurrency" element={<Cryptocurrency />}/>
              <Route exact path="/paypal" element={<Paypal />}/>
              <Route exact path="/klarna" element={<Klarna />}/>
              <Route exact path="/products" element={<Products />}/>
              <Route exact path="/pricing" element={<Pricing />}/>

              <Route exact path="*" element={<Error />}/>
            </Routes>
          </header>
        </div>
      </Router>
    </Container>
  ); 
}

export default App;