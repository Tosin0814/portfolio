import Scripts from "../../components/Scripts/Scripts";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectDetailPage() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Scripts/>
    <h1>Project Details</h1>
    </>
  );
}