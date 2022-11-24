// Compoenents
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
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
    <section>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </section>
  );
}