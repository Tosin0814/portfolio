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
              <li>Project Title</li>
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

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Project Date</strong>: 01 March, 2020</li>
                    <li><strong>GitHub</strong>: <a href={"#"} target="_blank">www.example.com</a></li>
                    <li><strong>Project URL</strong>: <a href={"#"} target="_blank">www.example.com</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <p>
                    Description: Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
    
  );
}