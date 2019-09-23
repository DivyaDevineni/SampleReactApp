import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './homeComponent';
import About from './aboutComponent';
import Contact from './contactComponent';
// import logo from './logo.svg';
//import Counter from './counterComponent';
import Navbar from './navbarComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      {/* <Counter/> */}
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
             <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
