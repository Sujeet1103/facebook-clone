import React ,{useRef,useState}from 'react'
import './register.css'
import { Link,useNavigate } from 'react-router-dom'

export default function Register() {
    const [errmsg, setErrMsg] = useState("");
  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()
  let  cpasswordRef = useRef()
 
  const navigate = useNavigate()

const handleSignup =async(e)=>{
  e.preventDefault()
 
try {
  let response = await fetch('http://localhost:2000/api/users/create',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
     },
    body:JSON.stringify(  {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      cpassword: cpasswordRef.current.value,
     })
    
 })
 const data = await response.json();
console.log(data);
setErrMsg(data.message)
setTimeout(() => {
  setErrMsg("")
}, 5000);
if(response.ok){
  navigate('/login')
}
} catch (error) {
  console.log(error.message)
  setErrMsg(error.message)
  setTimeout(() => {
    setErrMsg("")
  }, 5000);
}
}
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">facebook</h3>
                <div className="registerLeftDesc">
                 Connect with friends and the world <br /> around you on Facebook.
                </div>
            </div>
            <div className="registerRight">
            <div className="registerBox">
            <form action="" className='registerForm'>
                <h1 style={{textAlign:"center",color:"red"}}>{errmsg}</h1>
                    <div class="registerUsername">
                        <input className='registerInput' placeholder='Name' type="text" id="name-l" ref={nameRef}/>
                    </div>
                    <div class="registerEmail">
                        <input className='registerInput' placeholder='Email or Phone number' type="text" id="username-l" ref={emailRef}/>
                    </div>
                    <div class="registerPassword">
                        <input className='registerInput' placeholder='Password' type="password" id="password-R" ref={passwordRef}/>
                    </div>
                    <div class="registerPassword">
                        <input className='registerInput' placeholder=' cpassword' type=" cpassword" id=" cpassword-R" ref={ cpasswordRef}/>
                    </div>
                    <div class="registerSubmit">
                    <button onClick={handleSignup} className="registerBtn">Sign up</button>
                    </div>
                    <hr className="registerHr" />
                    <div className="registerLoginAc">
                    
                        <label for="reg-btn">
                                <Link   to="/login">
                        <span >Already have a account?</span>
                        </Link>
                        </label>       
                        </div>
                </form>
            </div>
            <div className="registerRightDesc">
              <b>Create a Page </b> for a celebrity, brand or business.
            </div>
        </div>
        </div>
    </div>
  )
}