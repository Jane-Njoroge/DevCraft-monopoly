import React, {useState} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const [showPassword,setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {

        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
    };

    const togglePasswordVisibility = (e) => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username,email,password,confirmPassword} = formData;

        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required")
            return
        }
        if (password !== confirmPassword) {
            setErrorMessage("password do not match");
            return
        }
        setErrorMessage('');
        alert('Account Created Successfully!')

        navigate('/login')
    };

    return (
        <div className='signup-container'>
            <h2>Sign up to Monopoly</h2>
            <form onSubmit={handleSubmit}>

                <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                />

               <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />

                <div className="password-field">
                    <input
                    type={showPassword ? 'text': 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                    <span onClick={togglePasswordVisibility}>
                        {showPassword ? '🙈': '👁️'}
                    </span>
                </div>

                <div className="password-field">
                    <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    />
                    <span onClick={togglePasswordVisibility}>
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>

                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit">Sign up</button>

                <p>
                    Already have an account?{' '}
                    <span className="login-link" onClick={() => navigate('/login')}>
                        Login here
                    </span>
                </p>

            </form>
        </div>
    )
};
export default SignUp