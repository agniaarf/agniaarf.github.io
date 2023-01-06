import React from "react";
import './about.css';
import user from '../../assets/dyl.jpg'


function About(){
    return(
        <header id="beranda">
        <div class="hdr-container">
            <div class="hdr-content">
                <div class="profile-img">
                    <img src={user} alt="foto"/>
                </div>
                <div class="short-desc">
                    <div class="wrappernih">
                    <h1 >Hello, im </h1>
                    <h2 test-text="Agnia">Agnia</h2>
                    </div>
                    <div class="garis"></div>
                    <div class="mini-desc">
                        <p>I am Agnia Rizki Fadilla, you can call me dila! 
                        A passionate Full Stack Developer having an experience of building Web and Mobile applications with Javascript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
                        {/* <button>Contact Me</button>  */}
                    </div>
                    {/* <div class="contact">
                        <table>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td>Medan Satria, Bekasi Barat, Indonesia.</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td>+62 856-9423-3394</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>agniarizkifadilla@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td>:</td>
                                <td>25/05/06</td>
                            </tr>
                        </table>
                    </div> */}
                </div>
            </div>
        </div>
    </header>
    )
}

export default About