import React from 'react';
import './App.css';
import CardsContainer from "./components/CardsContainer"
import Navbar from "./components/navbar"

function App() {
    return(
        <React.Fragment>
        <Navbar/>
    <div className= "container mt-5">
        <div className = "row mb-5 ">
     <CardsContainer/>
     </div>
    </div>
    </React.Fragment>);
}

export default App;