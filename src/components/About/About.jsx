import AboutForm from "../AboutForm/AboutForm"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About({user, about}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section id="about" className="About about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <h3>{about.jobTitle}</h3>
                </div>
                <AboutForm user={user}/>
            </div>
        </section>
    )
}