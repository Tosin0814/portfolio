import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
          <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
              <Route path="/AdminLogin" element={<AuthPage user={user} setUser={setUser} />} />
            </Routes>
    </main>
  );
}
