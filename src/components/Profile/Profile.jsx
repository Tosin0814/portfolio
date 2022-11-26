import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Profile({user}) {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className="profile">
            <img src="https://tosin-portfolio.s3.ca-central-1.amazonaws.com/1606037592592.jpeg" alt="Not Found" className="img-fluid rounded-circle"/>
            <h1 className="text-light">Lukmon Ayanleye</h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/Tosin0814" target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/oluwatosin-ayanleye/" target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
    )
}