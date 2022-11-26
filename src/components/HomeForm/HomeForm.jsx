import { useState } from "react";

const defaultState = {
    backgroundImage:'',
    title:'',
    text:'',
}

export default function HomeForm({user}) {
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
    const disabled = !formData.backgroundImage || !formData.text || !formData.title

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto  bg-light border border-secondary p-3">
                        <h4 className="text-center">Home Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                            <div className="form-group">
                                <label htmlFor="backgroundImage">Background Image:&nbsp;</label>
                                <input type="text" name="backgroundImage" id="backgroundImage" value={formData.backgroundImage} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="title">Title:&nbsp;</label>
                                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text">Image:&nbsp;</label>
                                <input type="file" name="text" id="text" value={formData.text} onChange={handleChange}/>
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