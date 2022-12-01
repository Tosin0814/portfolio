export default function PortfolioItemImage({user, portfolioImage}) {

    return(
        <div id="portfolio-item" className="PortfolioItemImage" >
            {console.log('rendered image: ',portfolioImage)}
            <img className="mx-auto" src={`${portfolioImage}`} alt="Not found" style={{width:400}} />
        </div>
    )
}