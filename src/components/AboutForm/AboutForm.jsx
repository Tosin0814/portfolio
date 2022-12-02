import { useState } from "react";
import { createAbout } from "../../utilities/api/about";

// const defaultState = {
//     jobTitle:'',
//     text:'',
//     image:'',
// }

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
        // window.alert(JSON.stringify(formData))
        try{
            // const { jobTitle, text, image } = formData;
            const data = {...formData, userId:user._id}
            console.log(data)
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
                <div className="ContactForm">
                    <div className="form-container mx-auto w-50 bg-light border border-secondary p-2">
                        <h4 className="text-center">About Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group">
                                <label htmlFor="jobTitle">Job Title:&nbsp;</label>
                                <input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text1">Intro Text:&nbsp;</label>
                                <textarea type="text" rows="5" cols="30" name="text1" id="text1" value={formData.text1} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text2">Body Text:&nbsp;</label>
                                <textarea type="text" rows="5" cols="30" name="text2" id="text2" value={formData.text2} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text3">Body Text 2:&nbsp;</label>
                                <textarea type="text" rows="5" cols="30" name="text3" id="text3" value={formData.text3} onChange={handleChange} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="image">Image:&nbsp;</label>
                                <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required/>
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