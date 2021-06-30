import '../Login/Login.css'
import { Link } from 'react-router-dom'
import google from '../Login/images/google.svg'
import see from '../Login/images/see.svg'
import nosee from '../Login/images/nosee.svg'
import { useState } from 'react'

export const SignUp = () => {

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
                <div className="app-signup-img" >
                    {/* <img className="app-login-img" src={ LoginImg } alt="" /> */}
                </div>
                <div className="app-sgnup-form">
                    <h1 className="app-sgnup-heading">Create your Account</h1>
                    <form className="app-login-form" action="">
                    <div className="app-sgnup-input-grp">
                        <input className="app-sgnup-input" type="text" placeholder="Enter first name" name="" id="" />
                        <input className="app-sgnup-input" type="text" placeholder="Enter last name" name="" id="" />
                    </div>
                        <input className="app-sgnup-input" type="text" placeholder="Enter email address" name="" id="" />
                        <div className="app-login-pwd-container">
                            <input className="app-sgnup-input app-sgnup-input-left" placeholder="Password" type="text" />
                            <img onClick={ handleClick } className="app-login-pwd-mask" src={ logo } alt="" />
                        </div>
                        <div className="app-sgnup-chkbx">
                            <input type="checkbox" name="" id="" />I agree to the <Link className="app-sgnup-tnc" to={process.env.PUBLIC_URL + '/'}>Terms and Conditions</Link>
                        </div>
                        {/* <Link className="app-login-fgt-pwd" to={process.env.PUBLIC_URL + '/'}>Forgot password?</Link> */}
                        <button className="app-login-btn">Login</button>
                        <label className="lbl-or" htmlFor="">OR</label>
                        <button className="app-login-btn-google">
                            <img src={ google } alt="" />Sign up with Google
                        </button> 
                        <label className="app-login-sgnup" htmlFor="">Already have an account? <Link className="app-login-sgnup-lnk" to={process.env.PUBLIC_URL + '/login'}>Log in</Link></label>
                    </form>
                </div>
            </div>
        </section>
    )
}
