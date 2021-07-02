import '../Login/Login.css'
import { Link } from 'react-router-dom'
import google from '../Login/images/google.svg'
import see from '../Login/images/see.svg'
import nosee from '../Login/images/nosee.svg'
import React, { useState } from 'react'

export const SignUp = () => {
  

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isAgreed, setIsAgreed] = useState(false);

    const [logo, setLogo] = useState( nosee );
    const [show, setShow] = useState( true );
 
    function handleClick() {
        // console.log('hello world', show);
        (show) ? setLogo(see) : setLogo(nosee);
        setShow(!show);
    }

    async function signUp() {
        
        let first_name = firstName
        let last_name = lastName
        let password1 = password
        let password2 = password

        let user = {first_name, last_name, password1, password2, email}
        console.log(user);


        let result = await fetch('https://schoolscout.herokuapp.com/auth/registration/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json();
        let requestStatus = result.status;

        if (requestStatus === 201) {
            alert('You have successfully signed up!');
            localStorage.setItem('session id', JSON.stringify(result))
        } else {
            // alert(result.status + ': ' + result.statusText + '\nplease check your entries');
            alert('Unable to sign in. Please check your entries');
        }

        // if (Object.keys(result).includes('key')) {
        //     alert('You have successfully signed up.');
        //     localStorage.setItem('user-info', JSON.stringify(result));
        // } else {
        //     alert('please check your entries');
        // }

    }

    return (
        <section className="login-section">
            <div className="app-sgnup-container">
                <div className="app-signup-img" >
                    {/* <img className="app-login-img" src={ LoginImg } alt="" /> */}
                </div>
                <div className="app-sgnup-form">
                    <h1 className="app-sgnup-heading">Create your Account</h1>
                    <div className="app-login-form" action="">
                    <div className="app-sgnup-input-grp">
                        <input onChange={(e) => setFirstName(e.target.value)} value={ firstName } className="app-sgnup-input" type="text" placeholder="Enter first name" name="" id="1" />
                        <input onChange={(e) => setLastName(e.target.value)} value={ lastName } className="app-sgnup-input" type="text" placeholder="Enter last name" name="" id="2" />
                    </div>
                        <input onChange={(e) => setEmail(e.target.value)} value={ email } className="app-sgnup-input" type="text" placeholder="Enter email address" name="" id="3" />
                        <div className="app-login-pwd-container">
                            <input onChange={(e) => setPassword(e.target.value)} value={ password } className="app-sgnup-input app-sgnup-input-left" placeholder="Password" type={ !show ? "text" : "password" } id="4" />
                            <img onClick={ handleClick } className="app-login-pwd-mask" src={ logo } alt="" />
                        </div>
                        <div className="app-sgnup-chkbx">
                            <input type="checkbox" name="" id="5"/>I agree to the <Link className="app-sgnup-tnc" to={process.env.PUBLIC_URL + '/'}>Terms and Conditions</Link>
                        </div>
                        {/* <Link className="app-login-fgt-pwd" to={process.env.PUBLIC_URL + '/'}>Forgot password?</Link> */}
                        <button onClick={ () => signUp() } className="app-sgnup-btn">Sign up</button>
                        <label className="lbl-or" htmlFor="">OR</label>
                        <button className="app-login-btn-google">
                            <img src={ google } alt="" />Sign up with Google
                        </button> 
                        <label className="app-login-sgnup" htmlFor="">Already have an account? <Link className="app-login-sgnup-lnk" to={process.env.PUBLIC_URL + '/login'}>Log in</Link></label>
                    </div>
                </div>
            </div>
        </section>
    )
}
