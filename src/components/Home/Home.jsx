import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'
import HomeForm from "../HomeForm/HomeForm"

export default function Home({user, home, setHome}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <>
            <section id="hero" className="Home hero d-flex flex-column justify-content-center align-items-center" style={
                {
                    width: '100vw',
                    height: '100vh',
                    backgroundAttachment: 'fixed', 
                    backgroundSize: 'auto', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundPositionY: 'top', 
                    backgroundPositionX: 'center', 
                    backgroundImage: `url(${home.image})` 
                }}>
                <div className="hero-container" data-aos-delay='100' data-aos="fade-up" data-aos-duration="1000">
                    <span><h3 className="text-light">I am </h3></span><span><h1>{home.title}.</h1></span>
                    <p>{home.text}</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-right" data-aos-duration="1000">
                        <HomeForm user={user} home={home} setHome={setHome}/>
                    </div>
                </div>
            </section>
            
        </>
    )
}