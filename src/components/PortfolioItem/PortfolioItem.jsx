
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem({user}) {

    return(
        <div id="portfolio-item" className="PortfolioItem col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-links">
                {/* <Link href={`/projects/${''}`} title="More Details"><i class="bx bx-link"></i>
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
                    </div>
                    <h5 className="text-center">Portfolio Item Title</h5>
                </Link> */}
            </div>
        </div>
    )
}