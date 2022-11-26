import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeForm from "../HomeForm/HomeForm"

export default function Home({user}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Lukmon Ayanleye</h1>
                    <p>I'm <span className="typed" data-typed-items="a Full Stack Developer, a Mechanical Engineering Graduate"></span></p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <HomeForm user={user}/>
                    </div>
                </div>
            </section>
            
        </>
    )
}