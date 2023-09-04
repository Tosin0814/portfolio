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
                    { about.text1 &&
                        <p className="fst-italic" data-aos-delay='100' data-aos="fade-up">{about.text1}</p>
                    }
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        { about.image &&
                            <img src={`${about.image}`} className="img-fluid" alt=""></img>
                        }
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos-delay='100' data-aos="fade-left" data-aos-duration="1000">
                        {/* { about.jobTitle &&
                            <h3>{about.jobTitle}</h3>
                        } */}
                        { about.text2 &&
                            <p>{about.text2}</p>
                        }
                        {/* { about.text3 &&
                            <p>{about.text3}</p>
                        } */}
                    </div>
                </div>
                <div className="text-center AboutForm mx-auto">
                    <AboutForm user={user} about={about} setAbout={setAbout}/>
                </div>
            </div>
        </section>
    )
}