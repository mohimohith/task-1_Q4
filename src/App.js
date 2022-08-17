import './App.css';
import {useState} from 'react';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

 
const App=()=>{
    return(
        <div>
 <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />}/>
        </Routes>
    </BrowserRouter>
    </div>
   
    )
}

export default App;
