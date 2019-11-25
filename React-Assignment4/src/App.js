import React from 'react';
import './component/myfile.css';
import Home from './component/Home';
import Nav from './component/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer';
function App() {
  return(
     <BrowserRouter>
        <div className="App">	  
	  	<div id="header">
	  	</div>
	 
	  	<div className="column middle">
          		<Route exact path='/' component={Home}/>
	  	</div>
	 
	  	<div className="column right">
	  		<Nav />
	  	</div>
	         
	
        </div>
      </BrowserRouter>

  );
}

export default App;
