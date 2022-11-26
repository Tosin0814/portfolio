import { useState } from "react";

const defaultState = {
    type:'',
    title:'',
    start:'',
    end:'',
    institution:'',
    description:'',
}

export default function ResumeItemForm({user}) {
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