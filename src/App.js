import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  let isLoggedIn = document.cookie.match(/^(.*;)?\s*user*=\s*[^;]+(.*)?$/)

  const onSubmit = (e) => {
    e.preventDefault()
    const uuid = uuidv4()
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    document.cookie = `uuid=${uuid}; expires=${expires}`
    setUser('')
    setPassword('')
  }
  const logout = () => {
    console.log('logged out')
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    isLoggedIn = false
  }
  
  return (
    <div className="App">
      {console.log(isLoggedIn)}
      <h1>{isLoggedIn ? `You are logged in`: 'Please Log In'}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" id="user" placeholder='Username' name="Username" value={user} onChange={(e) => setUser(e.target.value)} /><br/>
        <input type="password" id="password" placeholder='Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={logout} disabled={!isLoggedIn}>Logout</button>
    </div>
  );
}

export default App;
