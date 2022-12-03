import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../Homepage/HomePage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';

// Components
// import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/Profile/Profile';
import LoginForm from '../../components/LoginForm/LoginForm';


// Helpers
import { getUser } from '../../utilities/services/users';
import { getPortfolioItems } from '../../utilities/api/portfolioItem'
import { removePortfolioItem } from '../../utilities/api/portfolioItem';


// import '../../assets/css/style.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [portfolioItems, setPortfolioItems] = useState([])


  useEffect (function () {
    async function getPortfolioItemList() {
        const portfolioItemList = await getPortfolioItems()
        setPortfolioItems(portfolioItemList)
    }
    getPortfolioItemList()
    },[])

  async function deletePortfolioItem(item) {
    // console.log(item)
    const newPortfolioItemList = await removePortfolioItem(item)
    setPortfolioItems(newPortfolioItemList)
  }

  return (
    <>
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
          <Route path="/" element={<HomePage user={user} portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems} deletePortfolioItem={deletePortfolioItem} />} />
          <Route path="/projects/:projectName" element={<ProjectDetailPage user={user} portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems} />} />
          <Route path="/AdminLogin" element={<LoginForm user={user} setUser={setUser} />} />
      </Routes>
    </>
  );
}
