import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet"


// Components
import AuthPage from '../AuthPage/AuthPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/Profile/Profile';
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Home from '../../components/Home/Home'
import Portfolio from '../../components/Portfolio/Portfolio'
import Resume from '../../components/Resume/Resume'
import SkillsList from '../../components/SkillsList/SkillsList'
import Scripts from '../../components/Scripts/Scripts';

// Helpers
import { getUser } from '../../utilities/services/users';


// import '../../assets/css/style.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <Scripts/>
      {/* Mobile nav toggle button */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <Profile user={user}/>
          <NavBar user={user} setUser={setUser}/>
        </div>
      </header>
        
      <Home user={user}/>
      <About user={user}/>
      <SkillsList user={user}/>
      <Resume user={user}/>
      <Portfolio user={user}/>
      <Contact user={user}/>
      <Routes>
        {/* Route components in here */}
        <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
        {/* <Route path="/AdminLogin" element={<AuthPage user={user} setUser={setUser} />} /> */}
      </Routes>
    </>
  );
}
