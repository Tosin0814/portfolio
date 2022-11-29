import { useEffect, useState } from 'react'

// Components
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


export default function HomePage({user}) {
    const [contact, setContact] =useState([])
    const [about, setAbout] = useState([])
    const [home, setHome] = useState([])
    const [skills, setSkills] = useState([])
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
        getHomeInfo()
        getContacts()
        getAbouts()
        getSkillList()
    },[])
    

    return (
        <>
            <Home user={user} home={home} setHome={setHome} />
            <main id='main'>
                <About user={user} about={about} setAbout={setAbout}/>
                <SkillsList user={user} skills={skills} setSkills={setSkills} />
                <Resume user={user}/>
                <Portfolio user={user}/>
                <Contact user={user} contact={contact} setContact={setContact}/>
            </main>
        </>
    )
}