import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import ApiRegister from "../../services/ApiRegister";


function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dateOfBirth: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleRegisterButton() {
        const apiRegister = new ApiRegister(formData.name, formData.email, formData.password, formData.dateOfBirth);

        apiRegister.registerUser()
            .then(async response => {
                if (response) {
                    console.log("Inscrit");
                } else {
                    console.log("Inscription refusée");
                }
            })
            .catch(error => {
                console.error("Erreur lors de l'inscription :", error);
                console.log("Inscription refusée");
            });
        navigate("/login");
    }

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit" onClick={handleRegisterButton}>
                    Register
                </button>
            </form>
            <p>
                Already have an account?{" "}
                <span className="login-link" onClick={() => navigate("/login")}>
                    Login here
                </span>
            </p>
        </div>
    );
}

export default Register;
