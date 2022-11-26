import { useState, useEffect } from 'react';
import { login } from '../../utilities/services/users'
import { useNavigate } from 'react-router-dom';


const defaultState = {
    name: '',
    password: '',
    error: ''
}

export default function LoginForm({ user, setUser }) {
    const [formData, setFormData] = useState(defaultState)

    const { email, password, error } = formData;

    const navigate = useNavigate()
    useEffect(() =>{
        if (user) {
            navigate('/')
        }
    })

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try {
            const {  password, email } = formData;
            const data = {  password, email }

            const user = await login(data)
            // as soon as we get the decoded data from the creat account api call
            // (derived fromt he jwt in local storage), we can update app.js to store
            // user in state
            setUser(user)
        } catch (err) {
            setFormData({
                ...formData,
                error: 'Log in Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    const disabled = !email || !password

    return <div className='LoginForm'>
        <div className="form-container mx-auto w-50 bg-light border border-secondary p-3 mt-5 text-center">
            <h4 className='text-center'>Admin Login</h4>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className='form-group'>
                    <label htmlFor="login-email">Email:&nbsp;</label>
                    <input type="text" name="email" id="login-email" value={email} onChange={handleChange} required />
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor="login-password">Password:&nbsp;</label>
                    <input type="password" name="password" id="login-password" value={password} onChange={handleChange} required />
                </div>
                <br />
                <button type="submit" disabled={disabled} className="btn btn-primary">Log In</button>
            </form>
        </div>
        {error && <p className="error-message">&nbsp;{error}</p>}
    </div>
}