import ContactForm from "../ContactForm/ContactForm"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact({user}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section id="contact" className="Contact contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <ContactForm user={user}/>
            </div>
        </section>
        
    )
}