import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Home from '../../components/Home/Home'
import Portfolio from '../../components/Portfolio/Portfolio'
import Resume from '../../components/Resume/Resume'
import SkillsList from '../../components/SkillsList/SkillsList'

// Helpers
import { getUser } from '../../utilities/services/users';

import '../../assets/css/style.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            {/* <img src={profilePic} alt="No image" className="img-fluid rounded-circle"> </img> */}
            <h1 className="text-light">Lukmon Ayanleye</h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/Tosin0814" target="_blank" className="github"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/oluwatosin-ayanleye/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <NavBar user={user} setUser={setUser}/>
        </div>
      </header>
        <Routes>
          {/* Route components in here */}
          <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
          <Route path="/AdminLogin" element={<AuthPage user={user} setUser={setUser} />} />
        </Routes>
      <Home user={user}/>
      <About user={user}/>
      <SkillsList user={user}/>
      <Resume user={user}/>
      <Portfolio user={user}/>
      <Contact user={user}/>
    </main>
  );
}
