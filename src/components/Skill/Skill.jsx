import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill({user}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <h1 id="skill">Skill</h1>
    )
}