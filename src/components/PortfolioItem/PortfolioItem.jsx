import PortfolioItemImageForm from "../PortfolioItemImageForm/PortfolioItemImageForm"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioItem({user}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section id="portfolio-item" className="PortfolioItem">
            <h4>PortfolioItem</h4>
            <PortfolioItemImageForm user={user}/>
        </section>
    )
}