import { useState } from "react";
import { createAbout } from "../../utilities/api/about";
import './AboutForm.css'

export default function AboutForm({user, about, setAbout}) {
    const [defaultState] = useState({
        jobTitle: '',
        text1: '',
        text2: '',
        text3:'',
        image: '',
    })
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        try{
            const data = {...formData, userId:user._id}
            // console.log(data)
            const aboutData = await createAbout(data)
            setAbout(aboutData)
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'About Creation Failed - Try again!'
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
    const disabled = !formData.jobTitle || !formData.text1 || !formData.text2 || !formData.text2 || !formData.image

    return (
        <>
            { user &&
                <div className="AboutForm">
                    <div className="form-container border border-secondary">
                        <h4 className="text-center">About Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group mb-3">
                                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                <input type="text" className="form-control" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="text1" className="form-label">Intro Text</label>
                                <textarea type="text" className="form-control" rows="5" cols="30" name="text1" id="text1" value={formData.text1} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="text2" className="form-label">Body Text 1</label>
                                <textarea type="text" className="form-control" rows="5" cols="30" name="text2" id="text2" value={formData.text2} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="text3" className="form-label">Body Text 2</label>
                                <textarea type="text" className="form-control" rows="5" cols="30" name="text3" id="text3" value={formData.text3} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image" className="form-label">Image URL</label>
                                <input type="text" className="form-control" name="image" id="image" value={formData.image} onChange={handleChange} required/>
                            </div>
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}