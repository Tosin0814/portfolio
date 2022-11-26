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
                    <div className="form-container">
                        <h3>Skill Form</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <label htmlFor="skill">Skill</label>
                            <input type="text" name="skill" id="skill" value={formData.skill} onChange={handleChange} required/>

                            <label htmlFor="rating">Rating</label>
                            <select name="rating" id="rating" value={formData.rating} onChange={handleChange} required>
                                <option value='Beginner'>Beginner</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Advanced'>Advanced</option>
                            </select>

                            <label htmlFor="svg">SVG</label>
                            <input type="text" name="svg" id="svg" value={formData.svg} onChange={handleChange}/>

                            <button type="submit" disabled={disabled}>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}