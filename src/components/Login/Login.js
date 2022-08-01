import React, { useState } from 'react'
import './Login.scss'
import logo from '../../images/logo.png'
import {
  Link,
  NavLink
} from "react-router-dom"

const Login = (props) => {
    const {getUser} = props
    const [user, setUser]  = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = () => {

    }

  return (
    <div className='login'>
        <img src={logo} className='login_logo'/>

        <div className='login_container'>
            <h1 className='login_container_title'>Sign-in</h1>
            <form>
                <h3 className='login_container_label'>User</h3>
                <input 
                className='login_container_input' 
                type='text'
                value={user}
                onChange={(e) => {setUser(e.target.value)}}
                />

                <h3 className='login_container_label'>Password</h3>
                <input 
                className='login_container_input' 
                type='password'
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                />

                <Link to={'/'}>
                    <button 
                    className='signIn_button'
                    type='submit'
                    onClick={() => {getUser(user)}}
                    >
                        Sign In
                    </button>
                </Link>
            </form>
            <p className='login_container_condition'>By signing-in you agree to Urban's Conditions of Use &amp; Sale.
                Please see our Privacy Notice, our Cookies Notice 
                and our Interest-Based Ads Notice.
            </p>

            <button className='register_button'>Create your new Account</button>
        </div>
    </div>
  )
}

export default Login