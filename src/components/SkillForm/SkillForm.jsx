import { useState } from "react";

const defaultState = {
    skill:'',
    rating:'',
    svg:'',
}

export default function SkillForm({user}) {
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
    const disabled = !formData.skill || !formData.rating

    return (
        <>
            { user &&
                <div className="ContactForm">
                    <div className="form-container mx-auto w-50 bg-light border border-secondary p-2">
                        <h4 className="text-center">Skill Form</h4>
                        <form onSubmit={handleSubmit} autoComplete="off" encType="mulipart/formdata">
                            <div className="form-group">
                                <label htmlFor="skill">Skill:&nbsp;</label>
                                <input type="text" name="skill" id="skill" value={formData.skill} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="rating">Rating:&nbsp;</label>
                                <select name="rating" id="rating" onChange={handleChange} required defaultValue={'default'}>
                                    <option value={"default"} disabled hidden>Select an Option</option>
                                    <option value={'Beginner'}>Beginner</option>
                                    <option value={'Intermediate'}>Intermediate</option>
                                    <option value={'Advanced'}>Advanced</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="svg">SVG:&nbsp;</label>
                                <input type="file" name="svg" id="svg" value={formData.svg} onChange={handleChange}/>
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