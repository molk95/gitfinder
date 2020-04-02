import React, { Component } from 'react' ;
import './App.css';
import Navbar from './components/layout/Navbar';

 class App extends Component {
  render() {


    return (
      <div>
         <Navbar
          title='GitHub Finder'
          icon='fab fa-github '
          />
      </div>
    )
  }
}



export default App;
