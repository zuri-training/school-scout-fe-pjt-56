import './Login.css'
import { Link } from 'react-router-dom'
import google from './images/google.svg'
import see from './images/see.svg'
import nosee from './images/nosee.svg'
import { useState } from 'react'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [logo, setLogo] = useState( nosee );
    const [show, setShow] = useState( true );

    function handleClick() {
        // console.log('hello world', show);
        (show) ? setLogo(see) : setLogo(nosee);
        setShow(!show);
    }

    // async function userAuth() {
    //     let user = { email, password };
    //     console.log( user );

    //     let result = await fetch('https://schoolscout.herokuapp.com/auth/login/', {
    //         method: 'POST',
    //         body: JSON.stringify(user),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     }).then(res => {
    //         // res.json()
    //         console.log("res.status:", res.status, res.statusText);
    //         console.log("res.json:", res.json().then(fdb => console.log(fdb)));
    //     }).then(user => {
    //         console.log("user:", user);
    //     })
    // }

    async function login() {
        let user = { email, password };
        // console.log( user );

        let result = await fetch('https://schoolscout.herokuapp.com/auth/login/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        let feedback = await result.json();
        let requestStatus = result.status;

        if (requestStatus === 200) {
            alert('Login successful');
            console.log('result.status', result.status, 'result.statusText', result.statusText);
            localStorage.setItem('session id', JSON.stringify(feedback))
        } else {
            alert(result.status + ': ' + result.statusText);
        }


        // result = await result.json();
        // console.log("result status:", result.status);
        // console.log("result statustext:", result.statusText);
        // console.log("json status:", result);

        // if (Object.keys(result).includes('key')) {
        //     alert('Login successful.');
        //     localStorage.setItem('user-info', JSON.stringify(result));
        // } else {
        //     alert(Object.values(result))
        //     // alert('username / password mismatch');
        // }
    }

    return (
        <section className="login-section">
            <div className="app-login-container">
                <div className="app-login-img" >
                    {/* <img className="app-login-img" src={ LoginImg } alt="" /> */}
                </div>
                <div className="app-sgnup-form">
                    <h1 className="app-login-heading">Login to your account</h1>
                    <div className="app-login-form" action="">
                        <input value={ email } onChange={ (e) => setEmail(e.target.value) } className="app-login-input" type="text" placeholder="Enter email address" name="" id="" />
                        <div className="app-login-pwd-container">
                            <input value={ password } onChange={ (e) => setPassword(e.target.value) } className="app-login-input app-login-input-left" placeholder="Password" type={ !show ? "text" : "password" } />
                            <img onClick={ handleClick } className="app-login-pwd-mask" src= { logo } alt="" />
                        </div>
                        <Link className="app-login-fgt-pwd" to={process.env.PUBLIC_URL + '/'}>Forgot password?</Link>
                        <button onClick={ () => login() } className="app-login-btn">Login</button>
                        <label className="lbl-or" htmlFor="">OR</label>
                        <button className="app-login-btn-google">
                            <img src={ google } alt="" />Login with Google
                        </button>
                        <label className="app-login-sgnup" htmlFor="">Don’t have an account? <Link className="app-login-sgnup-lnk" to={process.env.PUBLIC_URL + '/signup'}>Sign up</Link></label>
                    </div>
                </div>
            </div>
        </section>
    )
}
