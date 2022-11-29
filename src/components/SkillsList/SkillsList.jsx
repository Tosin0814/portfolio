import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


import SkillForm from "../SkillForm/SkillForm"
import Skill from "../Skill/Skill";



export default function SkillsList({user, skills, setSkills}) {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <section id="skills" className="SkillsList skills section-bg">
            <div className="container" >
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row skills-content" data-aos="fade-right" data-aos-delay='50' data-aos-duration="1000">
                    {skills &&
                        skills.map((skill, idx) => (
                            <Skill key={idx} index={idx} skill={skill} />
                        ))
                    }
                </div>
                <SkillForm user={user} skills={skills} setSkills={setSkills} />
            </div>
        </section>
    )
}