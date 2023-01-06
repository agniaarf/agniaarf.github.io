import React from "react";
import './contact.css'

function Contact(){
    return(
        <section id="contact">
            
            <div class="pembates-page"></div>
            <div class="contact-section">
                <div class="contact-info bates">
                    <div><i class="fas fa-map-marker-alt"></i>Medan Satria, Kota Bekasi</div>
                    <div><i class="fas fa-envelope"></i>agniarizkifadilla@gmail.com</div>
                    <div><i class="fas fa-phone"></i>+62 856 9423 3394</div>
                </div>
               
            <div class="contact-form">
                <h2>Get In Touch</h2>
                <form class="contact" action="" method="post">
                <input type="text" name="name" class="text-box" placeholder="Your Name" required/>
                <input type="email" name="email" class="text-box" placeholder="Your Email" required/>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <input type="submit" name="submit" class="send-btn" value="Send"/>
                </form>
            </div>
    </div>
        </section>
    )
}

export default Contact