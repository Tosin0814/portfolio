import AboutForm from "../AboutForm/AboutForm"

export default function About({user}) {
    return(
        <section id="about" className="About about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <AboutForm user={user}/>
            </div>
        </section>
    )
}