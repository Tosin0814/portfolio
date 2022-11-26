import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


// Pages
import HomePage from '../Homepage/HomePage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';

// Components
import Scripts from '../../components/Scripts/Scripts';
// import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/Profile/Profile';



// Helpers
import { getUser } from '../../utilities/services/users';
import LoginForm from '../../components/LoginForm/LoginForm';


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
      
      <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/projects/:projectName" element={<ProjectDetailPage user={user} />} />
          <Route path="/AdminLogin" element={<LoginForm user={user} setUser={setUser} />} />
      </Routes>
    </>
  );
}
