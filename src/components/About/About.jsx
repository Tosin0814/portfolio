import AboutForm from "../AboutForm/AboutForm"
import './About.css'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About({user, about, setAbout}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section id="about" className="About about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p className="fst-italic">{about.text}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={`${about.image}`} class="img-fluid" alt=""></img>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos-delay='100' data-aos="fade-left" data-aos-duration="1000">
                        <h3>{about.jobTitle}</h3>
                        <p>{about.text2}</p>
                    </div>
                </div>
                <AboutForm user={user} about={about} setAbout={setAbout}/>
            </div>
        </section>
    )
}