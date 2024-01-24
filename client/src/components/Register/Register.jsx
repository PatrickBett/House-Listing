import {useEffect, useState} from 'react'
import "./Register.css"

function Register() {
const[username, setUsername]= useState('');
const [password, setPassword] = useState("");
const getUsername = (e) => {
  e.preventDefault();
  setUsername(e.target.value);
  console.log(username);
};

const getpassword = (e) => {
  e.preventDefault();
  setPassword(e.target.value);
  console.log(password);
};
const handleSubmit =async() =>{
  try{
      const response = await fetch('http://127.0.0.1:5000/user',
         { 
            method: 'POST', 
            headers: { 
                'Content-Type':  
                    'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({ username, password }),
        } )

       const data = await response.json();
       console.log(data)

       alert("user registered successfully")

    }

    catch(error){
      console.error("This is the error:",error)
    }

}

  return (
    <div className="register--container">
      <form onSubmit={handleSubmit} className="register--form">
        <label>Username</label>
        <br />
        <input
          value={username}
          onChange={(e) => getUsername(e)}
          className="input--field"
          type="text"
          placeholder="username"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={(e) => getpassword(e)}
          className="input--field"
          type="password"
          placeholder="password"
        />
        <br />
        {/* <label>Confirm password</label>
        <br />
        <input
          className="input--field"
          type="password"
          placeholder="confirm password"
        /> */}
        <br />
        <button className="submit--field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register
