import { useState } from "react";
import { createResumeItem } from "../../utilities/api/resumeItem";
import './ResumeItemForm.css'

export default function ResumeItemForm({user, resumeItems, setResumeItems}) {
    const defaultState = {
        type:'',
        title:'',
        start:'',
        end:'',
        institution:'',
        description1:'',
        description2:'',
        description3:'',
        description4:'',
        description5:'',
    }
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, userId:user._id}
            // console.log(data)
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
    const disabled = !formData.type || !formData.description1 || !formData.start || !formData.end || !formData.institution || !formData.title

    return (
        <>
            { user &&
                <div className="ResumeItemForm">
                    <div className="form-container w-100 border border-secondary">
                        <h4 className="text-center">Resume Item</h4>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="type">Type</label>
                                <select name="type" className="form-select" id="type" onChange={handleChange} defaultValue={'default'} required>
                                    <option value={"default"} disabled hidden>Select an Option</option>
                                    <option value={'edu'}>Education</option>
                                    <option value={'work'}>Work Experience</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="title">Title</label>
                                <input className="form-control" type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="start">Start</label>
                                <input className="form-control" type="month" name="start" id="start" value={formData.start} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="end">End</label>
                                <input className="form-control" type="month" name="end" id="end" value={formData.end} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="institution">Institution</label>
                                <input className="form-control" type="text" name="institution" id="institution" value={formData.institution} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description1">Description 1</label>
                                <textarea className="form-control" type="text" name="description1" id="description1" value={formData.description1} onChange={handleChange} required></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description2">Description 2 (Optional)</label>
                                <textarea className="form-control" type="text" name="description2" id="description2" value={formData.description2} onChange={handleChange} ></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description3">Description 3 (Optional)</label>
                                <textarea className="form-control" type="text" name="description3" id="description3" value={formData.description3} onChange={handleChange} ></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description4">Description 4 (Optional)</label>
                                <textarea className="form-control" type="text" name="description4" id="description4" value={formData.description4} onChange={handleChange} ></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description5">Description 5 (Optional)</label>
                                <textarea className="form-control" type="text" name="description5" id="description5" value={formData.description5} onChange={handleChange} ></textarea>
                            </div>
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}