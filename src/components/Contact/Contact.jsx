import ContactForm from "../ContactForm/ContactForm"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact({user, contact, setContact}) {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <section id="contact" className="Contact contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                    <div className="col d-flex align-items-stretch p-3">
                        <div className="info">

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>{contact.email}</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>{contact.phoneNumber}</p>
                            </div>

                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>{contact.location}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <ContactForm user={user} contact={contact} setContact={setContact} />
            </div>
        </section>
        
    )
}