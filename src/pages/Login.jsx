import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='loginpage'>

<div className="logincont">
<h1>Sign up</h1>
<div className="input">
<input type="text" placeholder='Your Name' />
<input type="email" placeholder='Email'/>
<input type="password" placeholder='Password' />
</div>

<div className="btn">
<button>Sign up</button>
</div>

<div className="have">
    <p>Already have an account?</p>
    <button>Login here</button>
</div>

<div className="finale">
  <input type="checkbox" />
  <p>Agree to terms and conditions</p>
</div>


</div>



    </div>
  )
}

export default Login