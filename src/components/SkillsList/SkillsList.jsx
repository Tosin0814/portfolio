import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SkillsList.css'

import SkillForm from "../SkillForm/SkillForm"
import Skill from "../Skill/Skill";



export default function SkillsList({user, skills, setSkills, deleteSkill}) {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <section id="skills" className="SkillsList skills section-bg">
            <div className="container" >
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content" data-aos="fade-right" data-aos-delay='100' data-aos-duration="1000">
                    {skills &&
                        skills.map((skill, idx) => (
                            <Skill key={idx} deleteSkill={deleteSkill} skill={skill} user={user}/>
                        ))
                    }
                </div>
                <SkillForm user={user} skills={skills} setSkills={setSkills} />
            </div>
        </section>
    )
}