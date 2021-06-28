import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <>
                <header>
                    <div className="container container-nav">
                        <img src="nav-logo.svg" alt="nav-logo"/>
                        <nav>
                            <div>
                                <ul className="nav-center" >
                                    <li><a href="./">Explore schools</a></li>
                                    <li><a href="./">Compare schools</a></li>
                                    <li><a href="./">Find scholarship</a></li>
                                    <li><a href="./">Career advisory</a></li>
                                </ul>
                            </div>
                        <div>
                            <ul className="nav-right">
                                <li><a href="./"><i className=" icon fas fa-search"></i>Search</a></li>
                                <li><a href="./"><i className=" icon fas fa-globe"></i>Language</a></li>
                                <li><a href="./"><i className=" icon fas fa-user"></i>User</a></li>
                                <li><a href="./"><i className=" icon fas fa-bookmark"></i>Saved</a></li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </header>
                <div className="footer-container">
                    <div className="footer-columns">
                        <div className="col col-2">
                            <p className="footer-description"><img src="logo.svg" alt="footer-logo"/>
                                <br/>school scout seeks to help students<br/>
                                make the best educational decision<br/>
                                by proviing them with all relevant<br/>
                                information and also helping them<br/>
                                choose a career for themselves.
                            </p>
                        </div>
                        <div className="col col-1">
                            <ul>
                                <li><a href="./">About us</a></li>
                                <li><a href="./">Explore schools</a></li>
                                <li><a href="./">Compare schools</a></li>
                                <li><a href="./">Find schorlaship</a></li>
                                <li><a href="./"> Career advisory</a></li>
                            </ul>
                        </div>
                        <div className="col col-1">
                            <ul>
                                <li><a href="./">Testimonials</a></li>
                                <li><a href="./">Review</a></li>
                                <li><a href="./">Articles/blog</a></li>
                            </ul>
                        </div>
                        <div className="col col-2">
                            <p>Newsletter signup</p>
                                <form action="">
                                    <label for="email">signup to get important information via mail</label><br/>
                                    <input type="email" placeholder="Enter email address"/>
                                </form>
                                <i className=" icon fas fa-instagram"></i>
                                <i className=" icon fas fa-linkedin"></i>
                                <i className=" icon fas fa-twitter"></i>
                                <i className=" icon fas fa-facebook"></i>
                        </div>

                    </div>
                    <div className="bottom">
                        <p>Copyright &copy;2021 SchoolScout. All rights resereved</p>
                    </div>
                </div>
            </>
        )

    }
}
export default Navbar;