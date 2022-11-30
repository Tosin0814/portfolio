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
import { removeSkill } from '../../utilities/api/skill'
// import { getPortfolioItems } from '../../utilities/api/portfolioItem'


export default function HomePage({user, portfolioItems, setPortfolioItems, deletePortfolioItem}) {
    const [contact, setContact] =useState([])
    const [about, setAbout] = useState([])
    const [home, setHome] = useState([])
    const [skills, setSkills] = useState([])
    // const [portfolioItems, setPortfolioItems] = useState([])
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
        // async function getPortfolioItemList() {
        //     const portfolioItemList = await getPortfolioItems()
        //     setPortfolioItems(portfolioItemList)
        // }
        getHomeInfo()
        getContacts()
        getAbouts()
        getSkillList()
        // getPortfolioItemList()
    },[])
    
    async function deleteSkill(skill) {
        // console.log(skill)
        const newSkills = await removeSkill(skill)
        setSkills(newSkills)
    }

    // async function deletePortfolioItem(item) {
    //     // console.log(item)
    //     const newPortfolioItemList = await removePortfolioItem(item)
    //     setPortfolioItems(newPortfolioItemList)
    // }

    return (
        <>
            <Home user={user} home={home} setHome={setHome} />
            <main id='main'>
                <About user={user} about={about} setAbout={setAbout}/>
                <SkillsList user={user} skills={skills} setSkills={setSkills} deleteSkill={deleteSkill} />
                <Resume user={user}/>
                <Portfolio user={user} portfolioItems={portfolioItems} setPortfolioItems={setPortfolioItems}  deletePortfolioItem={deletePortfolioItem}/>
                <Contact user={user} contact={contact} setContact={setContact}/>
            </main>
        </>
    )
}