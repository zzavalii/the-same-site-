import React from 'react';
import  {Link, Routes, Route} from "react-router-dom"
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation';
import Dialogs from './components/dialogue/Dialogs'
import Dating from './components/dating/Dating';
import DialogsContainer from './components/dialogue/DialogsContainer';
import DatingContainer from './components/dating/DatingContainer';


function App(props) {
  return (
    
    <div className='container'>
      <div className="left">
       <Navigation/>
      </div>
      
      <div className= "right">
        <Routes>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/dialogue' element={<DialogsContainer/>} />
          <Route path='/dating' element={<DatingContainer/>}/>
        </Routes>
      </div>
    </div>
    
    
  );
}

export default App;
