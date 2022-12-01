import ResumeItemForm from "../ResumeItemForm/ResumeItemForm"
import ResumeItem from "../ResumeItem/ResumeItem";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume({user, resumeItems, setResumeItems, deleteResumeItem}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section id="resume" className="Resume resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <div>
                    { resumeItems &&
                        resumeItems.map((resumeItem, idx) =>(
                            <ResumeItem key={idx} resumeItem={resumeItem} deleteResumeItem={deleteResumeItem} user={user} />
                        ))

                    }
                </div>
                <ResumeItemForm user={user} resumeItems={resumeItems} setResumeItems={setResumeItems} />
            </div>
        </section>
    )
}