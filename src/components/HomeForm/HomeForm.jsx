import { useState } from "react";
import { createHome } from "../../utilities/api/home";
import './HomeForm.css'


export default function HomeForm({user,home, setHome}) {
    const [defaultState] = useState({
        image: home.image,
        title: home.title,
        text: home.text,
    })
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, userId:user._id}
            // console.log(data)
            const homeData = await createHome(data)
            setHome(homeData)
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Home Creation Failed - Try again!'
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
    const disabled = !formData.text || !formData.title || !formData.image

    return (
        <>
            { user &&
                <div className="HomeForm">
                    <div className="form-container mx-auto border border-secondary p-3">
                        <h4 className="text-center">Home Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group mb-3">
                                <label htmlFor="title" className="form-label">Full Name</label>
                                <input className="form-control" type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="text" className="form-label">Summary</label>
                                <input className="form-control" type="text" name="text" id="text" value={formData.text} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image" className="form-label">Image URL</label>
                                <input className="form-control" type="text" name="image" id="image" value={formData.image} onChange={handleChange} required/>
                            </div>
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}