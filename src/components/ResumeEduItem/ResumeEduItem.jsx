

export default function ResumeItem({user, resumeItem, deleteResumeItem}) {
    
    async function handleClick(evt) {
        await deleteResumeItem(resumeItem)
    }
    return(
        <div className="resume-item">
            <h4>{resumeItem.title}</h4>
            <h5>{resumeItem.start} to {resumeItem.end}</h5>
            <p><em>{resumeItem.institution}</em></p>
            <ul>
                { resumeItem.description1 &&
                    <li>{resumeItem.description1}</li>
                }
                { resumeItem.description2 &&
                    <li>{resumeItem.description2}</li>
                }
                { resumeItem.description3 &&
                    <li>{resumeItem.description3}</li>
                }
                { resumeItem.description4 &&
                    <li>{resumeItem.description4}</li>
                }
                { resumeItem.description5 &&
                    <li>{resumeItem.description5}</li>
                }
                { resumeItem.description6 &&
                    <li>{resumeItem.description6}</li>
                }
                { resumeItem.description7 &&
                    <li>{resumeItem.description7}</li>
                }
                
            </ul>
            
            {user &&
                <button onClick={handleClick} className="btn btn-danger btn-sm">X</button>
            }
        </div>
        
    )
}