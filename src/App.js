import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

import React, {useState} from 'react'
import Alert from './Alert'

 
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  
const showAlert =(message,type)=>{
 setalert({
  msg:message,
  type:type
}) 
setTimeout(() => {
  setalert(null);
}, 1500);
}
    
    const toggleMode =()=>{
      if(mode==='light' ){
        setmode('dark')
        document.body.style.backgroundColor ='#042743'
        showAlert('dark mode has enabled','success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAlert('light mode has enabled','success')
    }
    }
 

  return (
    <>
        
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils"  togglemode={toggleMode} mode={mode}/>
    <Alert alert= {alert}/>
    <div className="container my-3">

    {/* /users --> Component 1
        /users/home --> Component 2 */}
   
  
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            
    
    </div>

    </>
  );
}

export default App;