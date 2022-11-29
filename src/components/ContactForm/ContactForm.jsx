import { useState } from "react"
import { create } from "../../utilities/api/contact"



export default function ContactForm({user, contact, setContact}) {
    const [defaultState, setDefaultState] = useState({
        phoneNumber: '',
        email:'',
        location:'',
    })
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const { phoneNumber, email, location } = formData;
            const data = {...formData, userId:user._id}
            console.log(data)
            const contactData = await create(data)
            setContact(contactData)
            setFormData(defaultState)
            
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Contact Creation Failed - Try again!'
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

    const disabled = !formData.phoneNumber || !formData.email || !formData.location
    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto w-75 bg-light border border-secondary p-3">
                        <h3 className="text-center">Contact Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div>
                                <label htmlFor="phoneNumber">Phone Number:&nbsp;</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="email">Email:&nbsp;</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="location">Location:&nbsp;</label>
                                <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required/>
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