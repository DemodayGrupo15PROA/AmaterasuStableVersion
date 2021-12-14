import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import './App.css';
import { auth } from './Config/firebase-config';

import Form from './Screen/Form/Form';
import Home from './Screen/Home/Home';

function App() {
  const [isSigned, setIsSigned] = useState("");

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsSigned(true)
      } else {
        setIsSigned(false)
      }
    });
  }, [isSigned])

  
  
  return (
    isSigned  === true ? <Home/>:<Form/>
  );
}

export default App;
