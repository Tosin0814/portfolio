import PortfolioItemForm from "../PortfolioItemForm/PortfolioItemForm"
import PortfolioItem from "../PortfolioItem/PortfolioItem"
import './Portfolio.css'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Portfolio({user, portfolioItems, setPortfolioItems, deletePortfolioItem}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <section id="portfolio" className="Portfolio portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                    { portfolioItems &&
                        portfolioItems.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((portfolioItem, idx) => (
                            <PortfolioItem key={idx} portfolioItem={portfolioItem} deletePortfolioItem={deletePortfolioItem} user={user} />
                        ))
                    }
                </div>
                <PortfolioItemForm user={user} portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems} />
            </div>
        </section>
    )
}