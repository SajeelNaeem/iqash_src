import React from 'react';
import './App.css';
import ButtonGroup from './components/ButtonGroup'
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from '@mui/material';
// import Creditcard from './components/Creditcard';
import CreditcardController from './controllers/CreditcardController';
import Cryptocurrency from './components/Cryptocurrency';
import Paypal from './components/Paypal';
import Klarna from './components/Klarna';
import Products from './components/ProductsPage';
import Pricing from './components/PricingPage';
import Error from './components/Error';


// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {apiResponse:''};
//   }
//   callAPI(){
//     fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setState({apiResponse: res}));
//   }

//   componentWillMount(){
//     this.callAPI();
//   }

//   render(){
//     return (
//       <Container maxWidth='xl'>
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             <NavigationBar />
//             <Routes>
//               <Route exact path="/" element={<ButtonGroup />}/>  
//               <Route exact path="/creditcard" element={<Creditcard />}/>
//               <Route exact path="/cryptocurrency" element={<Cryptocurrency />}/>
//               <Route exact path="/paypal" element={<Paypal />}/>
//               <Route exact path="/klarna" element={<Klarna />}/>
//               <Route exact path="/products" element={<Products />}/>
//               <Route exact path="/pricing" element={<Pricing />}/>

//               <Route exact path="*" element={<Error />}/>
//             </Routes>
//           </header>
//         </div>
//       </Router>
//       </Container>
//     );
//   }
// }

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