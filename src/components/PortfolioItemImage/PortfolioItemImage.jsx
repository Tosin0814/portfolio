export default function PortfolioItemImage({user, PortfolioImage}) {

    return(
        <div id="portfolio-item" className="PortfolioItemImage swiper-slide">
            <img src={`${PortfolioImage.image}`} alt="Not found" />
        </div>
    )
}