import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill({user, skill, index}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div id="Skill" className="Skill m-2 text-center" style={{width: 100, height:80}}>
            <img className="mx-auto" src={skill.image} alt="Not found" style={{width: 50, marginBottom:0}}/>
            <div className="m-0">
                <div className="">
                    <h6>{skill.skill}</h6>
                </div>
            </div>
        </div>
    )
}