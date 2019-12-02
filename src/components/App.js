import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/search" component={Search}/>
            <Route path="/search/:id"  component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
    <h1>*</h1>  
  </div>
  ) 
}

export default App;
