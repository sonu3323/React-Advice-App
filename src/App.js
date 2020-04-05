import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios";

function App() {

  const [advice, setAdvice] = useState("Loading..");

  useEffect(() => {
   
    fetchAdvice();

  }, [])

  const fetchAdvice = () => {
    Axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        
        const advice = res.data.slip.advice;
        setAdvice(advice)
       

      }).catch((error) => {
        console.log(error)
      });
  }



  return (
    <div className="App">
    <h1 className="head-text">Get Advice on one click!</h1>
     <div className="card">
     <h1 className="heading">{advice}</h1>
     <button className="button" onClick={fetchAdvice}>
       <span>Give me Advice! </span></button>
     </div>
     <p className="footer">@Sonu Sharma</p>
    </div>
    
  );
}

export default App;
