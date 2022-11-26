import { useState } from "react";

const defaultState = {
    title:'',
    description:'',
    dateCreated:'',
    github:'',
    siteURL:'',
}

export default function PortfolioItemForm({user}) {
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
    const disabled = !formData.title || !formData.description || !formData.dateCreated || !formData.github || !formData.siteURL

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container">
                        <h3>Portfolio Item Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>

                            <label htmlFor="description">Description</label>
                            <textarea type="textarea" rows="7" cols="50" name="description" id="description" value={formData.description} onChange={handleChange} required></textarea>

                            <label htmlFor="dateCreated">Date Created</label>
                            <input type="month" name="dateCreated" id="dateCreated" value={formData.dateCreated} onChange={handleChange} required/>

                            <label htmlFor="github">GitHub</label>
                            <input type="text" name="github" id="github" value={formData.github} onChange={handleChange} required/>

                            <label htmlFor="siteURL">Site URL</label>
                            <input type="text" name="siteURL" id="siteURL" value={formData.siteURL} onChange={handleChange} required/>
                            
                            <button type="submit" disabled={disabled}>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}