import  React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function ForgotPassword() {
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Password reset link sent to:${email}`);

        alert("If this email exists, a reset link has been sent.");
        navigate('/')
    };

    return (

        <div className='forgot-password-container'>
            <h2>Forgot Password</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Enter you email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <button type="submit">Send Reset Link</button>

            </form>
        </div>
    )
}

export default ForgotPassword;