import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';


function App() {
  function handkeClick(event) {
    console.log(event.target.value);
  }
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('Hello React');
    //console.log(inputValue);
  }
  const [mybio, setMyBio] = useState('');
  const handleChanges = (event) => {
    setMyBio('Hii Hello');
  }

  const [role, setRole] = useState('');
  const handleChanges1 = (event) => {
    setRole('Hii Hello');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Here:</label>
        <input type='text' onChange={handleChange} />
         <br />
        <br />
        <label>Message</label>
       <textarea value={mybio} onChange={(e) => setMyBio(e.target.value)} placeholder="Enter your message here..." />
        
         <br />
        <br />
        <label>Role:</label> 
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="developer">Developer</option>
          <option value="desinger">Desinger</option>
          <option value="manager">Manager</option>
        </select>
      </form>
      <p>Value:{inputValue}</p> <br />
      <p>Bio:{mybio}</p>

    </div>
  );
}

export default App;
