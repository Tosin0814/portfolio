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
                    <p>
                        <em>
                            A Full Stack Software Developer not afraid to take on new challenges, 
                            hyper-focused on getting things done to completion and obsessed with 
                            product optimization.
                        </em>
                    </p>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <h3 className="resume-title">Work Experience</h3>
                        { resumeItems &&
                            resumeItems.map((resumeItem, idx) =>(
                                resumeItem.type==='work' ? <ResumeWorkItem key={idx} resumeItem={resumeItem} deleteResumeItem={deleteResumeItem} user={user} />
                                : ""
                            ))
                        }
                    </div>
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
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