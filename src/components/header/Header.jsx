import React from "react";
import './header.css';
import user from '../../assets/dyl.jpg'


function Header(){
    return(
        <nav>
        <div class="nav-pasd">
            <img src={user} alt="foto" />
            <ul class="for-link">
                <li><a href="#beranda">
                    Home
                </a></li>
                <li><a href="#skill">
                    About
                </a></li>
                <li><a href="#porto">
                    Portfolio
                </a></li>
                <li><a href="#contact">
                    Contact
                </a></li>
            </ul>
            <ul class="sosmedakoeh">
                <li><a href="https://www.instagram.com/agniaarf" target="_blank" rel="noreferrer" >
                    <i class="fa-brands fa-instagram"></i>
                </a></li>
                <li><a href="https://www.github.com/agniaarf" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/in/agniaarf05" target="_blank"rel="noreferrer" >
                    <i class="fa-brands fa-linkedin"></i>
                </a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Header