import { useEffect, useState } from 'react'

// Components
import NavBar from '../../components/NavBar/NavBar';
import Profile from '../../components/Profile/Profile';
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Home from '../../components/Home/Home'
import Portfolio from '../../components/Portfolio/Portfolio'
import Resume from '../../components/Resume/Resume'
import SkillsList from '../../components/SkillsList/SkillsList'


import { getContact } from '../../utilities/api/contact';
import { getAbout } from '../../utilities/api/about'
import { getHome } from '../../utilities/api/home'
import { getSkills } from '../../utilities/api/skill'
import { removeSkill } from '../../utilities/api/skill'
import { getResumeItems } from '../../utilities/api/resumeItem'
import { removeResumeItem } from '../../utilities/api/resumeItem'


export default function HomePage({user, setUser, portfolioItems, setPortfolioItems, deletePortfolioItem}) {
    const [contact, setContact] =useState([])
    const [about, setAbout] = useState([])
    const [home, setHome] = useState([])
    const [skills, setSkills] = useState([])
    const [resumeItems, setResumeItems] = useState([])
    useEffect (function () {
        async function getContacts() {
            const contacts = await getContact();
            setContact(contacts)
        }
        async function getAbouts() {
            const abouts = await getAbout();
            setAbout(abouts)
        }
        async function getHomeInfo() {
            const homeInfo = await getHome()
            setHome(homeInfo)
        }
        async function getSkillList() {
            const skillList = await getSkills()
            setSkills(skillList)
        }
        async function getResumeItemList() {
            const resumeItemList = await getResumeItems()
            setResumeItems(resumeItemList)
        }
        
        getHomeInfo()
        getContacts()
        getAbouts()
        getSkillList()
        getResumeItemList()
    },[])
    
    async function deleteSkill(skill) {
        const newSkills = await removeSkill(skill)
        setSkills(newSkills)
    }

    async function deleteResumeItem(item) {
        const newResumeItemList = await removeResumeItem(item)
        setResumeItems(newResumeItemList)
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
            <Home user={user} home={home} setHome={setHome} />
            <main id='main'>
                <About user={user} about={about} setAbout={setAbout}/>
                <SkillsList user={user} skills={skills} setSkills={setSkills} deleteSkill={deleteSkill} />
                <Resume user={user} resumeItems={resumeItems} setResumeItems={setResumeItems} deleteResumeItem={deleteResumeItem} />
                <Portfolio user={user} portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems}  deletePortfolioItem={deletePortfolioItem}/>
                <Contact user={user} contact={contact} setContact={setContact}/>
            </main>
        </>
    )
}