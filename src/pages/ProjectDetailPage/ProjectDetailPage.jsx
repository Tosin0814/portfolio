import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";



import PortfolioItemImage from "../../components/PortfolioItemImage/PortfolioItemImage";
import PortfolioItemImageForm from "../../components/PortfolioItemImageForm/PortfolioItemImageForm"
import { getPortfolioItems } from "../../utilities/api/portfolioItemImage";
import './PortfolioDetailPage.css'

export default function ProjectDetailPage({user, portfolioItems, setPortfolioItems}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  const projectParams = useParams()
  const [project, setProject] = useState([])
  const [projectImages, setProjectImages] = useState([])

  useEffect(function () {
    async function getImages() {
      const portfolioItems = await getPortfolioItems();
      // console.log("porfolio Items: ", portfolioItems)
      const portfolioItem = await portfolioItems.filter((portfolioItem) => {
        return portfolioItem.title.includes(projectParams.projectName)
      })
      setProject(portfolioItem[0])

      setProjectImages(portfolioItem[0].portfolioItemImages)
    }
    getImages()
  },[projectParams])
  
  function updateProjectImages(projectImageData) {
    setProjectImages([...projectImages, projectImageData])
  }

  

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{project.title} Details</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>{project.title}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details PortfolioDetailPage">
        <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="text-center">
                  <div className=" align-items-center mx-auto slider">
                    <Slider {...settings} >
                      {
                        projectImages.map((portfolioImage, idx) => (
                          <PortfolioItemImage portfolioImage={portfolioImage.image} key={idx} user={user} />
                        ))
                      }
                    </Slider>
                    <br />
                  </div>
                  <PortfolioItemImageForm user={user} project={project} projectImages={projectImages} updateProjectImages={updateProjectImages} />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <ul>
                    <li><strong>Project Date</strong>: {project.dateCreated}</li>
                    <li><strong>GitHub</strong>: <a href={`${project.github}`} target="_blank" rel="noreferrer">{project.github}</a></li>
                    <li><strong>Project URL</strong>: <a href={`${project.siteURL}`} target="_blank" rel="noreferrer">{project.siteURL}</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <p>
                    {`${project.description}`}
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
    
  );
}