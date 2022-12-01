
import { Link } from "react-router-dom";

export default function PortfolioItem({user, portfolioItem, deletePortfolioItem}) {
    async function handleClick(evt) {
        await deletePortfolioItem(portfolioItem)
    }

    return(
        <div id="portfolio-item" className="PortfolioItem col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-links">
                <Link to={`/projects/${portfolioItem.title}`} title="More Details"><i className="bx bx-link"></i>
                    <div className="portfolio-wrap">
                        <img src={portfolioItem.portfolioItemImages[0].image} className="img-fluid" alt="Not found"/>
                    </div>
                    <h5 className="text-center text-dark">{portfolioItem.title}</h5>
                </Link>
                {user &&
                    <button onClick={handleClick} className="btn btn-danger btn-sm">X</button>
                }
            </div>
        </div>
    )
}