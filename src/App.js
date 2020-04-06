import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()


function App() {

  const [advice, setAdvice] = useState("Loading..");

  useEffect(() => {
   
    fetchAdvice();
    notify();

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


  const notify=()=>{
  
    let today = new Date()
    let curHr = today.getHours()
    
    if (curHr < 12) {
      return  toast.success("Hey Good Morning!");
    } else if (curHr < 18) {
      return  toast.info("Hey Good Afternoon!");
    } else {
      return  toast.success("Hey Good Evening");
    }

  }


  return (
    <div className="App">
    <span onClick={notify}></span>
    <h1 className="head-text">Get quote on one click!</h1>
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
