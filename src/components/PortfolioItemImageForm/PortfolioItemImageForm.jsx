import { useState } from "react";
import { createPortfolioItemImage } from "../../utilities/api/portfolioItemImage";
import './PortfolioItemImageForm.css'

export default function PortfolioItemImageForm({user, project, updateProject}) {

    const defaultState = {
        image:'',
    }

    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const data = {...formData, portfolioItemId:project._id}
            // console.log("My form data: ", data)
            const updatedProject = await createPortfolioItemImage(data)
            // console.log('returned data: ', portfolioItemImageData)
            updateProject(updatedProject)
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Item Image Creation Failed - Try again!'
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
    const disabled = !formData.image

    return(
        <>
            { user &&
                <div className="ProjectItemImageForm">
                    <div className="form-container border border-secondary">
                        <h4 className="text-center">Add Image</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                           
                            <div className="form-group mb-1">
                                <label className="form-label" htmlFor="image">Image URL&nbsp;</label>
                                <input className="form-control" type="text" name="image" id="image" value={formData.image} onChange={handleChange} required/>
                            </div>                            
                            <button type="submit" disabled={disabled} className="btn btn-primary">Upload</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}