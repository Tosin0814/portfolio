import { useState } from "react";
import { createHome } from "../../utilities/api/home";

// const defaultState = {
//     image:'',
//     title:'',
//     text:'',
// }

export default function HomeForm({user,home, setHome}) {
    const [defaultState, setDefaultState] = useState({
        image:'',
        title:'',
        text:'',
    })
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const { image, title, text } = formData;
            const data = {...formData, userId:user._id}
            console.log(data)
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
    const disabled = !formData.text || !formData.title

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto  bg-light border border-secondary p-3">
                        <h4 className="text-center">Home Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                            <div className="form-group">
                                <label htmlFor="title">Title:&nbsp;</label>
                                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="text">text:&nbsp;</label>
                                <input type="text" name="text" id="text" value={formData.text} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="image">Image:&nbsp;</label>
                                <input type="file" name="image" id="image" value={formData.image} onChange={handleChange}/>
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