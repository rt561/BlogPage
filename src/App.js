import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Card from './components/Card/Card';

function App() {
  return (
    
    <>
   <Navbar/>
   <div>
      
     
     <Banner/>
     <Main/>
     <Card/>
    </div>
    </>
  );
}

export default App;
