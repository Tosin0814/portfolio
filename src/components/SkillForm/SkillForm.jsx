import { useState } from "react";
import { createSkill } from "../../utilities/api/skill";
import './SkillForm.css'


export default function SkillForm({user, skills, setSkills}) {
    const defaultState = {
        skill:'',
        rating:'',
        image:'',
    }
    const [formData, setFormData] = useState(defaultState)

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        
        try{
            const data = {...formData, userId:user._id}
            // console.log(data)
            const skillData = await createSkill(data)
            setSkills([...skills, skillData])
            setFormData(defaultState)
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Skill Creation Failed - Try again!'
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
    const disabled = !formData.skill || !formData.rating || !formData.image

    return (
        <>
            { user &&
                <div className="SkillForm w-100 border border-secondary">
                    <div className="form-container ">
                        <h4 className="text-center">Skill</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                            <div className="form-group mb-3">
                                <label htmlFor="skill">Skill</label>
                                <input type="text" className="form-control" name="skill" id="skill" value={formData.skill} onChange={handleChange} required/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="rating">Rating</label>
                                <select className="form-select" name="rating" id="rating" onChange={handleChange} required defaultValue={'default'}>
                                    <option value={"default"} disabled hidden>Select an Option</option>
                                    <option value={'Beginner'}>Beginner</option>
                                    <option value={'Intermediate'}>Intermediate</option>
                                    <option value={'Advanced'}>Advanced</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Image</label>
                                <input type="text" className="form-control" name="image" id="image" value={formData.image} onChange={handleChange} required/>
                            </div>
                            <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}