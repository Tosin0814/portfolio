import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  const [profilePic, setProfilePic] = useState([])

  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  // return (
  //   <nav>
  //     <Link to="/orders">Order History</Link>
  //     &nbsp; | &nbsp;
  //     <Link to="/orders/new">New Order</Link>
  //     &nbsp; &nbsp; <span className="name">Hey there {user.name}!</span>
  //     &nbsp; &nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>

  //   </nav>
  // );
  return(
    <div id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        {!user &&
        <Link to="/AdminLogin">Login</Link>
        }
        {/* <img src={profilePic} alt="No image" className="img-fluid rounded-circle"> </img> */}
        <h1 className="text-light"><Link to="">Lukmon Ayanleye</Link></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://github.com/Tosin0814" target="_blank" className="github"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/oluwatosin-ayanleye/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><Link to="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
          <li><Link to="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></Link></li>
          <li><Link to="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
          <li><Link to="" onClick={handleLogOut} className="nav-link"><i className="bx bx-log-out"></i> <span>Logout</span></Link></li>
        </ul>
      </nav>
    </div>
  </div>
  )
}