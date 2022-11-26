import ResumeItemForm from "../ResumeItemForm/ResumeItemForm"

export default function Resume({user}) {
    return(
        <section id="resume" className="Resume resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <ResumeItemForm user={user}/>
            </div>
        </section>
    )
}