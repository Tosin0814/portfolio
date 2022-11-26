import { useState } from "react"


const defaultState = {
    phoneNumber:'',
    email:'',
    location:'',
}

export default function ContactForm({user}) {
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();
        window.alert(JSON.stringify(formData))
        // setFormData(defaultState)
        // try{
        //     const { name, password, email } = formData;
        //     const data = {name, password, email}
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

    const disabled = !formData.phoneNumber || !formData.email || !formData.location
    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container">
                        <h3>Contact Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>

                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} required/>

                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required/>
                            <button type="submit" disabled={disabled}>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
        
    )
}