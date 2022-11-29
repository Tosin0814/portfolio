import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill({user, skill, deleteSkill}) {
    useEffect(() => {
        AOS.init();
      }, [])

    async function handleClick(evt) {
        await deleteSkill(skill)
    }
    return(
        <div id="Skill" className="Skill m-3 text-center" style={{width: 100, height:80}}>
            <img className="mx-auto" src={skill.image} alt="Not found" style={{width: 50, marginBottom:0}}/>
            <div className="m-0">
                <div className="">
                    <h6>
                        {skill.skill}
                    </h6>
                    {user &&
                        <button onClick={handleClick} className="btn btn-danger btn-sm">X</button>
                    }
                </div>
            </div>
        </div>
    )
}