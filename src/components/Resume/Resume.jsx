import ResumeItemForm from "../ResumeItemForm/ResumeItemForm"
import ResumeWorkItem from "../ResumeWorkItem/ResumeWorkItem";
import ResumeEduItem from "../ResumeEduItem/ResumeEduItem";

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
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Work Experience</h3>
                        { resumeItems &&
                            resumeItems.map((resumeItem, idx) =>(
                                resumeItem.type==='work' ? <ResumeWorkItem key={idx} resumeItem={resumeItem} deleteResumeItem={deleteResumeItem} user={user} />
                                : ""
                            ))
                        }
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Education</h3>
                        { resumeItems &&
                            resumeItems.map((resumeItem, idx) =>(
                                resumeItem.type==='edu' ? <ResumeEduItem key={idx} resumeItem={resumeItem} deleteResumeItem={deleteResumeItem} user={user} />
                                : ""
                            ))
                        }
                    </div>
                </div>
                
                <ResumeItemForm user={user} resumeItems={resumeItems} setResumeItems={setResumeItems} />
            </div>
        </section>
    )
}