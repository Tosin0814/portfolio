export default function Profile({user}) {
    return(
        <div className="profile">
            {/* <img src={profilePic} alt="No image" className="img-fluid rounded-circle"> </img> */}
            <h1 className="text-light">Lukmon Ayanleye</h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/Tosin0814" target="_blank" className="github"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/oluwatosin-ayanleye/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
    )
}