import { Link } from 'react-router-dom';

import * as userService from '../../utilities/services/users'
// import PureCounter from "@srexi/purecounterjs";


export default function NavBar({ user, setUser }) {

  // useEffect(() => {
  //   const pure = new PureCounter();
  // }, [])

  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return(
      <nav id="navbar" className="NavBar nav-menu navbar">
        <ul>
          <li><Link to="/#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
          <li><Link to="/#skills" className="nav-link scrollto"><i class="bx bx-cog" ></i> <span>Skills</span></Link></li>
          <li><Link to="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="/#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></Link></li>
          <li><Link to="/#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
          <li>{!user ?
            <Link to="/AdminLogin" className="nav-link"><i className="bx bx-log-in"></i> <span>Login</span></Link> : 
            <Link to="" onClick={handleLogOut} className="nav-link"><i className="bx bx-log-out"></i> <span>Logout</span></Link>
            }</li>
        </ul>
      </nav>
  )
}