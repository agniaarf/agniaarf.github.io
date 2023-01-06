import React from "react";
import './mywork.css';
import proj1 from '../../assets/portfolio.PNG'
import proj2 from '../../assets/few.PNG'
import proj3 from '../../assets/proj2.PNG'

function Mywork(){
    return(
        <>
        <section id="porto">
            <div class="pembates-page"></div>
            <div class="porto-content">
                <div class="judul-porto">
                    <h1>My Works</h1>
                </div>
            </div>

            <div class="porto-container">
                <div className="porto-card">
                    <div className="card">
                        <span></span>
                        <div className="card-img">
                            <img src={proj1} alt="foto" />
                        </div>
                        <div className="card-content">
                            <div>
                                <h2>Website Personal Branding</h2>
                                <p>Website yang dibuat pada 8 agustus sampai 9 september  2022 ini menggunakan HTML & CSS.Dimana content didalamnya berisi halaman beranda, tentang, form serta halaman portfolio.Menggunakan tag table, form, table, serta multimedia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <span></span>
                        <div className="card-img">
                            <img src={proj2} alt="foto" />
                        </div>
                        <div className="card-content">
                            <div>
                                <h2>Front End : podcaster</h2>
                                <p>Website ini dimulai pada 26 september sampai 12 oktober 2022 menggunakan HTML & CSS serta bahasa pemrograman CSS.Dengan menggunakan konsep MVC.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <span></span>
                        <div className="card-img">
                            <img src={proj3} alt="foto" />
                        </div>
                        <div className="card-content">
                            <div>
                                <h2>Interface Website </h2>
                                <p>Website ini menggunakan HTML & CSS.Dibuat menggunakan tag tabel.Terdapat profile pembuat dan galeri yang berisi dokumentasi website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    
    )
}

export default Mywork