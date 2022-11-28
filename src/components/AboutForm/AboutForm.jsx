import { useState } from "react";
import { createAbout } from "../../utilities/api/about";

// const defaultState = {
//     jobTitle:'',
//     text:'',
//     image:'',
// }

export default function AboutForm({user}) {
    const [defaultState, setDefaultState] = useState({
        jobTitle:'',
        text:'',
        image:'',
    })
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        // window.alert(JSON.stringify(formData))
        try{
            const { jobTitle, text, image } = formData;
            const data = {...formData, userId:user._id}
            console.log(data)
            const aboutData = await createAbout(data)
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'About Creation Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        // const newFormData = {
        //     ...formData, // use the existing formData
        //     [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
        //     error: '' // clear any old errors as soon as the user interacts with the form
        // };
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);

    }
    const disabled = !formData.jobTitle || !formData.text 

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto w-50 bg-light border border-secondary p-2">
                        <h4 className="text-center">About Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                            <div className="form-group">
                                <label htmlFor="jobTitle">Job Title:&nbsp;</label>
                                <input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text">Text:&nbsp;</label>
                                <textarea type="text" rows="5" cols="35" name="text" id="text" value={formData.text} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="image">Image:&nbsp;</label>
                                <input type="file" name="image" id="image" value={formData.image} onChange={handleChange} />
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