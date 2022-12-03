import './PortfolioItemImage.css'

export default function PortfolioItemImage({user, portfolioImage}) {
    return(
        <div id="portfolio-item" className="PortfolioItemImage" >
            <img className="mx-auto slider" src={`${portfolioImage}`} alt="Not found"/>
        </div>
    )
}