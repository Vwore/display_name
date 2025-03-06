import './App.css';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName]=useState('')
  const [showFullName,setShowFullName] = useState(false);

  return (
    <div className="App">
      <form>
        <label htmlFor='first-name' >First Name</label>
        <input name='first-name' required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
        <label htmlFor='last-name'>Last Name</label>
        <input name='last-name' required value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
        <button type='submit' onClick={(e)=>{ e.preventDefault(); console.log(e); setShowFullName(true); }}>Submit</button>
      </form>
      {showFullName?`Full Name:${firstName} ${lastName}`:null}

    </div>
  );
}

export default App;
