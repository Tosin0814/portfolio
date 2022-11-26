import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PortfolioItemImage from "../../components/PortfolioItemImage/PortfolioItemImage";
import PortfolioItemImageForm from "../../components/PortfolioItemImageForm/PortfolioItemImageForm"

export default function ProjectDetailPage({user}) {
  console.log("Details Page")
  return (
    <main>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Project Details</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Project Name</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details PortfolioDetailPage">
        <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <PortfolioItemImage/>
                  </div>
                  <div className="swiper-pagination"></div>
                  <PortfolioItemImageForm user={user}/>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
    
  );
}