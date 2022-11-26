import SkillForm from "../SkillForm/SkillForm"
import Skill from "../Skill/Skill";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SkillsList({user}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section id="skills" className="SkillsList skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <SkillForm user={user} />
            </div>
        </section>
    )
}