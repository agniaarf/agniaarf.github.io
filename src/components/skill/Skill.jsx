import React from "react";
import './skill.css'

function Skill(){
    return(
        <section id="skill">
        <div class="pembates-page"></div>
        <div class="skill-container">
            <div class="skill-content">
                <div class="judul-skill">
                    <h1>Education</h1>
                </div>
                <div class="list-skill">
                    <ul>
                        <span><i class="fa-solid fa-school"></i><li>SMPN 19 Kota Bekasi</li></span>
                        <span><i class="fa-solid fa-graduation-cap"></i><li>SMKN 1 Kota Bekasi</li></span>
                    </ul>
                </div>
            </div>
            <div class="skill-content pembates">
                <div class="judul-skill">
                    <h1>Skill</h1>
                </div>
                <div class="list-skill">
                    <ul className="skillm">
                        <span><i class="fa-solid fa-code"></i><li>HTML & CSS</li></span>
                        <span><i class="fa-brands fa-php"></i><li>Php</li></span>
                        <span></span>
                    </ul>
                </div>
            </div>
            <div class="skill-content pembates">
                <div class="judul-skill">
                    <h1>Languages</h1>
                </div>
                <div class="list-skill  ">
                    <ul className="style">
                        <li>
                            <h3>Bahasa Indonesia</h3>
                            <span className="bar">
                                
                                <span className="Bahasa-Indonesia"></span>
                            
                            </span>
                        </li>
                        <li>
                            <h3>English</h3>
                            <span className="bar">
                                <span className="English"></span>
                            </span>
                        </li>
                        <li>
                            <h3>Japan</h3>
                            <span className="bar">
                                <span className="Japan"></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skill