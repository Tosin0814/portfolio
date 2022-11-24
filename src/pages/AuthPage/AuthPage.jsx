// Compoenents
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Scripts from "../../components/Scripts/Scripts";
import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AuthPage({ user, setUser }) {
  const navigate = useNavigate()
  useEffect(() =>{
    if (user) {
        navigate('/')
    }
  })
  return (
    <div className="AuthPage">
      <Scripts/>
      <h1>AuthPage</h1>
      {/* <SignUpForm setUser={setUser}/> */}
      <LoginForm user={user} setUser={setUser}/>
    </div>
  );
}