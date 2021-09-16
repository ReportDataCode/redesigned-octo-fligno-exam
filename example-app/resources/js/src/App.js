import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
const App = () => {
    return (
        
           <Router className="App__container">
               <Switch>
                   <Route exact path="/">
                       <Home/>
                   </Route>
                   </Switch>
                   </Router>
                   
    );
    
};

ReactDOM.render(<App />, document.getElementById('app'));

// 8:03 https://www.youtube.com/watch?v=RXD7wgP5BXU&t=42s

    