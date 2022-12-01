

export default function ResumeItem({user, resumeItem, deleteResumeItem}) {
    
    async function handleClick(evt) {
        await deleteResumeItem(resumeItem)
    }
    return(
        <div className="resume-item">
            <p>Type:{resumeItem.type}</p>
            <h1>{resumeItem.title}</h1>
            <h3>{resumeItem.institution}</h3>
            {resumeItem.description}
            {user &&
                <button onClick={handleClick} className="btn btn-danger btn-sm">X</button>
            }
        </div>
        
    )
}