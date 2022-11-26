import PortfolioItemImageForm from "../PortfolioItemImageForm/PortfolioItemImageForm"
export default function PortfolioItem({user}) {
    return(
        <section id="portfolio-item" className="PortfolioItem">
            <h4>PortfolioItem</h4>
            <PortfolioItemImageForm user={user}/>
        </section>
    )
}