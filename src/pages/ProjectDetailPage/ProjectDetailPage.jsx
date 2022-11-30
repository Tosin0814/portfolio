import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";


import PortfolioItemImage from "../../components/PortfolioItemImage/PortfolioItemImage";
import PortfolioItemImageForm from "../../components/PortfolioItemImageForm/PortfolioItemImageForm"

export default function ProjectDetailPage({user, portfolioItems, setPortfolioItems}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // console.log(portfolioItems)
  const projectParams = useParams()
  // console.log("Project Params",projectParams)

  const [project, setProject] = useState(portfolioItems.filter((portfolioItem) => {
    return portfolioItem.title.includes(projectParams.projectName)
  }))
  // console.log("Current Project: ",project)
  const [projectImages, setProjectImages] = useState(project[0].portfolioItemImages)
  console.log(projectImages)
  return (
    <main>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{project[0].title} Details</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>{project[0].title}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details PortfolioDetailPage">
        <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider ">
                  <div className=" align-items-center">
                    <Slider {...settings}>
                      {
                        project[0].portfolioItemImages.map((portfolioImage, idx) => (
                          <PortfolioItemImage portfolioImage={portfolioImage} key={idx} user={user} />
                        ))
                      }
                    </Slider>
                    
                  </div>
                  <PortfolioItemImageForm user={user} projectImages={projectImages} setProjectImages={setProjectImages} />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>{project[0].title} information</h3>
                  <ul>
                    <li><strong>Project Date</strong>: {project[0].dateCreated}</li>
                    <li><strong>GitHub</strong>: <a href={`${project[0].github}`} target="_blank" rel="noreferrer">{project[0].github}</a></li>
                    <li><strong>Project URL</strong>: <a href={`${project[0].siteURL}`} target="_blank" rel="noreferrer">{project[0].siteURL}</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <p>
                    {`${project[0].description}`}
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
    
  );
}