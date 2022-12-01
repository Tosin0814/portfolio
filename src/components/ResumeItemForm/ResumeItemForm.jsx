import { useState } from "react";
import { createResumeItem } from "../../utilities/api/resumeItem";


export default function ResumeItemForm({user, resumeItems, setResumeItems}) {
    const defaultState = {
        type:'',
        title:'',
        start:'',
        end:'',
        institution:'',
        description:'',
    }
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, userId:user._id}
            console.log(data)
            const resumeItemData = await createResumeItem(data)
            setResumeItems([...resumeItems, resumeItemData])
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Item Creation Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {
        
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);

    }
    const disabled = !formData.type || !formData.description || !formData.start || !formData.end || !formData.institution || !formData.title

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto w-75 bg-light border border-secondary p-2">
                        <h3 className="text-center">Resume Item Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group">
                                <label htmlFor="type">Type:&nbsp;</label>
                                <select name="type" id="type" onChange={handleChange} defaultValue={'default'} required>
                                    <option value={"default"} disabled hidden>Select an Option</option>
                                    <option value={'edu'}>Education</option>
                                    <option value={'work'}>Work Experience</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="title">Title:&nbsp;</label>
                                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="start">Start:&nbsp;</label>
                                <input type="month" name="start" id="start" value={formData.start} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="end">End:&nbsp;</label>
                                <input type="month" name="end" id="end" value={formData.end} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="institution">Institution:&nbsp;</label>
                                <input type="text" name="institution" id="institution" value={formData.institution} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="description">Description:&nbsp;</label>
                                <textarea type="textarea" rows="7" cols="50" name="description" id="description" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <br />
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}