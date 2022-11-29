import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'react-typed';

import HomeForm from "../HomeForm/HomeForm"

export default function Home({user, home, setHome}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-up" data-aos-duration="1000">
                    <h1>{home.title}</h1>
                    <p>I'm <span ><Typed strings={['a Full Stack Developer',`a ${home.text}`, 'a Mechanical Engineering Graduate']} typeSpeed={40} backSpeed={60} loop/></span></p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-up" data-aos-duration="1000">
                        <HomeForm user={user} home={home} setHome={setHome}/>
                    </div>
                </div>
            </section>
            
        </>
    )
}