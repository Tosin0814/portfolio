import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Slider from "react-slick";



import PortfolioItemImage from "../../components/PortfolioItemImage/PortfolioItemImage";
import PortfolioItemImageForm from "../../components/PortfolioItemImageForm/PortfolioItemImageForm"
import { getPortfolioItem } from "../../utilities/api/portfolioItem"
import './PortfolioDetailPage.css'

export default function ProjectDetailPage({user}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  
  const projectParams = useParams()
  const [project, setProject] = useState([])

  // console.log(project)
  // console.log(projectParams)
  const getProjectData = async () => {
    const data = await getPortfolioItem(projectParams.projectName)
    setProject(data)
  }

  function updateProject (data) {
    setProject(data)
  }

  useEffect(() => {
    getProjectData()
    // eslint-disable-next-line
  },[])

  return (
    <main id="">
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

      { project &&
        <section id="portfolio-details" className="portfolio-details PortfolioDetailPage">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="text-center">
                  <div className=" align-items-center mx-auto slider">
                    { project.portfolioItemImages &&
                      <Slider {...settings} >
                        {
                          project.portfolioItemImages.map((portfolioImage, idx) => (
                            <PortfolioItemImage portfolioImage={portfolioImage.image} key={idx} user={user} />
                          ))
                        }
                      </Slider>
                    }
                    
                    <br />
                  </div>
                  <PortfolioItemImageForm user={user} project={project} updateProject={updateProject} />
                </div>
              </div>

              <div className="col-lg-4 bg-danger">
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
      }
      
    </main>
    
  );
}