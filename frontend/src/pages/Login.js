import React, {useState} from "react"
import "./login.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"



function Login() {

    const [formData, setFormData] = useState({
        identifier:'',
        password:'',
    })


    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:',formData);

        if (formData.identifier && formData.password){
            console.log('Logging in...');
            navigate('/loading');
            
        } else {
            console.log('Please fill in all fields.');
            
        }
    };

    return (
        <div className="loginform-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                type="text"
                name="identifier"
                placeholder="Email or Username"
                value={formData.identifier}
                onChange={handleChange}
                required
                />

                <div className="password">
                <input
                    type={showPassword ? 'text': 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />

                <span
                onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? '🙈': '👁️'}
                </span>
                </div>

                <div>
                    <Link href="/forgot-password" className="text">
                    forgot password?
                    </Link>

                </div>

                <button type="submit" className="login-btn" >
                    Login
                </button>

                <p>
                    Don't have an account ?{''}
                    <span className="signup" onClick={() => navigate('/Signup')}>
                        Sign-Up

                    </span>
                </p>

            </form>
        </div>
    )



}
export default Login