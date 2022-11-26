import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ResumeItem({user}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <h1>ResumeItem</h1>
    )
}