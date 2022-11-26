import PortfolioItemForm from "../PortfolioItemForm/PortfolioItemForm"
import PortfolioItem from "../PortfolioItem/PortfolioItem"

export default function Portfolio({user}) {
    
    return(
        <section id="portfolio" className="Portfolio portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <PortfolioItemForm user={user}/>
            </div>
        </section>
    )
}