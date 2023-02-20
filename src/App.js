import React, { useState, useEffect, useRef } from 'react';
import Usercards from './Usercards';
import './App.css'
import axios from 'axios'
import image from './VocadsLogo.png'

function App() {
  const [usercards, setusercards] = useState([])

  const amountEl = useRef(10)



  useEffect(() => {
   
  }, [])



  function handleSubmit(e) {
    e.preventDefault()
    
    axios
    .get('https://random-data-api.com/api/users/random_user?size='+amountEl.current.value)
    .then(res => {
      setusercards(res.data)
    })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
<img className="logo" width='130px' src={image}/>
        <div className="form-group">
          <label htmlFor="amount">Number of random users:</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <Usercards usercards={usercards} />
      </div>
    </>
  );
}

export default App;
