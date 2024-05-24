import React,{useRef,useState} from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom'


export default function Login() {

  const [errMsg, seterrMsg] = useState("");

  // const dispatch = useDispatch()
 
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useNavigate()
  const  handleLogin = async (e)=>{
   e.preventDefault();
   try{
    let response = await fetch('https://', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      })
      let data = await response.json();
      // console.log(data);
      if (response.ok) {
        // dispatch(loginUser(data.user))
        navigate('/')
      }
      else{
        seterrMsg(data.msg)
        // console.log(data)
        setTimeout(()=>{
          seterrMsg("")
        },2000)
      }
    } catch (error) {
      seterrMsg(error.msg)
      // console.log(error)

    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">facebook</h3>
          <div className="loginLeftDesc">
            Connect with friends and the world <br /> around you on Facebook.
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="error" style={{textAlign:"center"}}>{errMsg}</p>
            <form action="#" className="loginForm">
              <div className="loginUsername">
                <input
                  className="loginInput"
                  placeholder="Email or Phone number"
                  type="text"
                  id="username-l"
                  ref={emailRef}
                />
              </div>
              <div className="loginPassword">
                <input
                  className="loginInput"
                  placeholder="Password"
                  type="password"
                  id="password-l"
                  ref={passwordRef}
                />
              </div>
              <div className="loginSubmit">
                <button onClick={ handleLogin} className="loginBtn" type="submit">Login</button>
                <Link to="/homeWith"> </Link>
              </div>
              <span>
                <Link className="forgetPwd" to="#email?">
                  Forgot your password?
                </Link>
              </span>
              <hr className="loginHr" />
              <div class="loginCreateAc">
                <Link to="/register">
                  <input
                    className="loginCreateBtn"
                    type="submit"
                    value="Create new account"
                  />
                </Link>
              </div>
            </form>
          </div>
          <div className="loginRightDesc">
            <b>Create a Page </b> for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
}