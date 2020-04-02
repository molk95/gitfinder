import React, { Component } from 'react' ;
import './App.css';
import Navbar from './components/layout/Navbar';

import UsersSection from './components/users/UsersSection'

 class App extends Component {
  render() {


    return (
      <div>
         <Navbar
          title='GitHub Finder'
          icon='fab fa-github '
          />
         <div className= "container">
         <UsersSection />
         </div>

        
      </div>
    )
  }
}



export default App;
