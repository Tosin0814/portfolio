import { useState } from "react";

const defaultState = {
    jobTitle:'',
    text:'',
    image:'',
}

export default function AboutForm({user}) {
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        window.alert(JSON.stringify(formData))
        setFormData(defaultState)
        // try{
        //     const { name, password, description } = formData;
        //     const data = {name, password, description}
        //     const user = await signUp(data)
        //     // as soon as we get the decoded data from the creat account api call
        //     // (derived fromt he jwt in local storage), we can update app.js to store
        //     // user in state
        //     setUser(user)
        // }catch (err) {
        //     setFormData({
        //         ...formData,
        //         error: 'Sign up Failed - Try again!'
        //     })
        // }
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
    const disabled = !formData.jobTitle || !formData.text || !formData.image

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container">
                        <h3>About Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} required/>

                            <label htmlFor="text">Text</label>
                            <textarea type="text" rows="7" cols="50" name="text" id="text" value={formData.text} onChange={handleChange} required/>

                            <label htmlFor="image">Image URL</label>
                            <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required/>

                            <button type="submit" disabled={disabled}>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}