import React, {useState,useContext} from 'react'
import classes from "./Auth.module.css"
import { Link,useNavigate,useLocation } from 'react-router-dom'
import {auth} from "../../Utility/FireBase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../components/DataProvider/DataProvider"
import {Type} from '../../Utility/ActionType'
import {RingLoader} from "react-spinners"



function Auth() {
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const [error,setError]=useState("");
const [loading, setLoading]=useState({
  signIn: false,
  signUp: false
})
const [{user},dispatch]=useContext(DataContext);
const navigate =useNavigate()
const navStateData=useLocation()
console.log(navStateData);
  
const authHandler = async (e)=>{
e.preventDefault();
console.log(e.target.name);
if (e.target.name == "signin"){
  setLoading({...loading, signIn:true})
  signInWithEmailAndPassword(auth,email,password)
  .then((userInfo)=>{
    dispatch({
      Type: Type.SET_USER,
      user: userInfo.user,
    })
    setLoading({...loading, signIn:false})
    navigate(navStateData?.state?.redirect || "/")
  })
  .catch((err)=>{
    setError(err.message)
    setLoading({...loading, signIn:false })
  })

}else{
  setLoading({...loading, signUp:true })
createUserWithEmailAndPassword(auth, email, password)
.then((userInfo)=>{
  dispatch({
    Type: Type.SET_USER,
    user: userInfo.user,
        })
        setLoading({...loading, signUp: false})
        navigate("/")
})
.catch((err)=>{
  setError(err.message)
  setLoading({...loading, signUp:false})
})
}
}

  return (
    <section className={classes.login}>
<Link to="/" >
<img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"  />
</Link>


<div className={classes.login_container}>
  <h1>Sign In</h1>
{
  navStateData?.state?.msg &&(
    <small
    style={{
      padding:"5px",
      textAlign:"center",
      color:"red",
      fontWeight:"bold"
    }}>
      {navStateData?.state?.msg}
    </small>
  )
}
  <form action="">
<div>
  <label htmlFor="email">Email</label>

  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
  </div>
  <div>
  <label htmlFor="password">Paswsord</label>
 
  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password"/>
</div>
<button 
 type="submit" 
  name="signin"
  onClick={authHandler} 
className={classes.login_signinButton}>
  {loading.signIn ? (<RingLoader
  color="#000"
  size={20}
></RingLoader>) : ("Sign In")}
  </button>
  </form>
  <p>
    By singing-in you agreen to the AMAZON FAKE CLONE conditions of use & sale.please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
  </p>
  <button
  type="submit"  
  name="signup"
  onClick={authHandler} 
  className={classes.login_register_Button}>
    {loading.signUp ? (<RingLoader
  color="orange"
  size={20}
></RingLoader>) :("Create your Amazon Account") }
    </button>
    { error && (<small style={{paddingTop:"5px", color:"red"}}>{error}</small>)}
</div>
    </section>

  )
}

export default Auth