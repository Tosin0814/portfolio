
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem({user, portfolioItem}) {
    
    return(
        <div id="portfolio-item" className="PortfolioItem col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-links">
                <Link to={`/projects/${portfolioItem.title}`} title="Moree Details"><i className="bx bx-link"></i>
                    <div className="portfolio-wrap">
                        <img src={portfolioItem.portfolioItemImages[0]} className="img-fluid" alt="Not found"/>

                    </div>
                    <h5 className="text-center">{portfolioItem.title}</h5>
                </Link>
            </div>
        </div>
    )
}