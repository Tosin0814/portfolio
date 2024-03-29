import { useState } from "react";
import { createPortfolioItem } from "../../utilities/api/portfolioItem";
import './PortfolioItemForm.css'

export default function PortfolioItemForm({user, portfolioItems, setPortfolioItems}) {
    const defaultState = {
        title:'',
        description:'',
        dateCreated:'',
        github:'',
        siteURL:'',
    }
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, userId:user._id}
            // console.log(data)
            const portfolioItemData = await createPortfolioItem(data)
            setPortfolioItems([...portfolioItems, portfolioItemData])
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Item Creation Failed - Try again!'
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
    const disabled = !formData.title || !formData.description || !formData.dateCreated || !formData.github || !formData.siteURL

    return (
        <>
            { user &&
                <div className="PortfolioItemForm">
                    <div className="form-container w-100 border border-secondary">
                        <h4 className="text-center">Project Item</h4>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="title">Title</label>
                                <input className="form-control" type="text" name="title" id="title" value={formData.title} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="description">Description</label>
                                <textarea className="form-control" type="textarea" rows="7" cols="50" name="description" id="description" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="dateCreated">Date Created</label>
                                <input className="form-control" type="month" name="dateCreated" id="dateCreated" value={formData.dateCreated} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="github">GitHub</label>
                                <input className="form-control" type="text" name="github" id="github" value={formData.github} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="siteURL">Site URL</label>
                                <input className="form-control" type="text" name="siteURL" id="siteURL" value={formData.siteURL} onChange={handleChange} required/>
                            </div>
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}