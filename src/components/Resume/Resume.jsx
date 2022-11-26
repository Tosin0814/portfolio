import ResumeItemForm from "../ResumeItemForm/ResumeItemForm"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume({user}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section id="resume" className="Resume resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <ResumeItemForm user={user}/>
            </div>
        </section>
    )
}