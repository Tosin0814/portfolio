
import { Link } from "react-router-dom";

export default function PortfolioItem({user, portfolioItem, deletePortfolioItem}) {
    async function handleClick(evt) {
        await deletePortfolioItem(portfolioItem)
    }

    return(
        <div id="portfolio-item" className="PortfolioItem col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-links">
                <Link to={`/projects/${portfolioItem.title}`} target="_blank" title={portfolioItem.title}>
                    <i className="bx bx-link"></i>
                    <div className="portfolio-wrap">
                        {portfolioItem.portfolioItemImages[0] &&
                            <img src={portfolioItem.portfolioItemImages[0].image} className="img-fluid" alt="Not found" style={{width:500, height:200}}/>
                        }
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