import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home.jsx"
import Cards from './components/Cards';
import Products from './components/Products';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return( 
   <> <Navbar/>
   <Switch>
   <Route path='/' exact component={Home} />
   <Route path='/services' exact component={Services} />
   <Route path='/product' exact component={Products} />
   <Route path='/sign-up' exact component={SignUp} />
   
   </Switch>
   <Cards/>   
   <Footer/>
   </>)
  
}

export default App;
