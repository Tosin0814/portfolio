import { useEffect } from 'react'
import { useState } from 'react'

// Components
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Home from '../../components/Home/Home'
import Portfolio from '../../components/Portfolio/Portfolio'
import Resume from '../../components/Resume/Resume'
import SkillsList from '../../components/SkillsList/SkillsList'


import { getContact } from '../../utilities/api/contact';


export default function HomePage({user}) {
    const [contact, setContact] =useState([])
    useEffect (function () {
        async function getContacts() {
            const contacts = await getContact();
            setContact(contacts)
        }
        getContacts()
    },[])

    return (
        <>
            <Home user={user}/>
            <main id='main'>
                <About user={user}/>
                <SkillsList user={user}/>
                <Resume user={user}/>
                <Portfolio user={user}/>
                <Contact user={user} contact={contact} />
            </main>
        </>
    )
}