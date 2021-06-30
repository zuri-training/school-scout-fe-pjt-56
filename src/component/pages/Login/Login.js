import './Login.css'
import { Link } from 'react-router-dom'
import google from './images/google.svg'
import see from './images/see.svg'
import nosee from './images/nosee.svg'
import { useState } from 'react'

export const Login = () => {

    const [logo, setLogo] = useState( nosee );
    const [show, setShow] = useState( true );

    function handleClick() {
        // console.log('hello world', show);
        (show) ? setLogo(see) : setLogo(nosee);
        setShow(!show);
    }

    return (
        <section className="login-section">
            <div className="app-login-container">
                <div className="app-login-img" >
                    {/* <img className="app-login-img" src={ LoginImg } alt="" /> */}
                </div>
                <div className="app-sgnup-form">
                    <h1 className="app-login-heading">Login to your account</h1>
                    <form className="app-login-form" action="">
                        <input className="app-login-input" type="text" placeholder="Enter email address" name="" id="" />
                        <div className="app-login-pwd-container">
                            <input className="app-login-input app-login-input-left" placeholder="Password" type={ !show ? "text" : "password" } />
                            <img onClick={ handleClick } className="app-login-pwd-mask" src= { logo } alt="" />
                        </div>
                        <Link className="app-login-fgt-pwd" to={process.env.PUBLIC_URL + '/'}>Forgot password?</Link>
                        <button className="app-login-btn">Login</button>
                        <label className="lbl-or" htmlFor="">OR</label>
                        <button className="app-login-btn-google">
                            <img src={ google } alt="" />Login with Google
                        </button>
                        <label className="app-login-sgnup" htmlFor="">Don’t have an account? <Link className="app-login-sgnup-lnk" to={process.env.PUBLIC_URL + '/signup'}>Sign up</Link></label>
                    </form>
                </div>
            </div>
        </section>
    )
}
