import PortfolioItemForm from "../PortfolioItemForm/PortfolioItemForm"
import PortfolioItem from "../PortfolioItem/PortfolioItem"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Portfolio({user}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <section id="portfolio" className="Portfolio portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                </div>
                <PortfolioItemForm user={user}/>
            </div>
        </section>
    )
}