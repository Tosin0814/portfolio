import SkillForm from "../SkillForm/SkillForm"
import Skill from "../Skill/Skill";

import { useEffect } from "react";


export default function SkillsList({user}) {
    
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