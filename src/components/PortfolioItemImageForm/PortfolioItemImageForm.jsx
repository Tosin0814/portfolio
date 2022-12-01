import { useState } from "react";
import { createPortfolioItemImage } from "../../utilities/api/portfolioItemImage";

export default function PortfolioItemImageForm({user, project, projectImages, updateProjectImages}) {
    // console.log("current project Images: ",projectImages)
    // console.log(project)

    const defaultState = {
        image:'',
    }

    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, portfolioItemId:project._id}
            console.log(data)
            const portfolioItemImageData = await createPortfolioItemImage(data)
            console.log('returned data: ', portfolioItemImageData)
            updateProjectImages(portfolioItemImageData)
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
                    <div className="form-container mx-auto w-50 bg-light border border-secondary p-2">
                        <h4 className="text-center">Image Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                           
                            <div className="form-group">
                                <label htmlFor="image">Image:&nbsp;</label>
                                <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required/>
                            </div>
                            <br />
                            
                            <button type="submit" disabled={disabled} className="btn btn-primary">Upload</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}