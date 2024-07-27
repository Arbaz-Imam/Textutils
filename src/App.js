import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import React,{useState} from 'react';
import Alert from "./components/Alert.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App(){
  const [Mode, setMode] = useState('light');// Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
 const showAlert = (message,type) => {
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
 }
 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
 }
  const toggleMode =(cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(Mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
     }
    else{
      setMode ('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils-LightMode';
    }
  }
  return(
    <>
{/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
{/* <Navbar /> */}
<Router>

<Navbar title="TextUtils" mode ={Mode} toggleMode={toggleMode}/>
<Alert  alert={alert}/>

<div className="container my-3">
    <Routes>
          <Route exact path="/about"element = {<About  mode ={Mode} />}>
          </Route>    
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter , Character Counter,
           Remove extra Spaces" 
           mode ={Mode} />}>
          </Route>
        </Routes>
     </div>
</Router>

    </>
  );
}


export default App;