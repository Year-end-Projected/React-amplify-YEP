import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Login.css";
//import { set } from "mongoose";
import ApiLogin from "../../services/ApiLogin";
import { set } from "mongoose";

function Login({ isAuth, setIsAuth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState([]);

    // function handleLoginButton(email, password) {
    //     console.log("handleLoginButton");
    //     const apiLogin = new ApiLogin(email, password);
    //     apiLogin.getToken().then(async token => {
    //         setToken(token);
    //         console.log(token);
    //     });
    //     console.log(isAuth);
    //     setIsAuth(true);
    //     navigate("/profile/my");
    // }

    // function handleLoginButton(email, password) {
    //     const apiLogin = new ApiLogin(email, password);
    //     apiLogin.getToken().then(async token => {
    //         setToken(token);
    //         console.log(token);
    //     });
    //     console.log("connecté");
    //     console.log("connexion refusée");
    // }

    function handleLoginButton(email, password) {
        const apiLogin = new ApiLogin(email, password);

        apiLogin.getToken()
            .then(async token => {
                if (token) {
                    setToken(token);
                    console.log("Connecté");
                    setIsAuth(true);
                } else {
                    console.log("Connexion refusée");
                }
            })
            .catch(error => {
                console.error("Erreur lors de la connexion :", error);
                console.log("Connexion refusée");
            });
        navigate("/profile/my");
    }



    const handleRegisterButton = () => {
        navigate("/register");
    };

    const handleLoginWithFacebook = () => { };

    const handleLoginWithGoogle = () => { };

    const handleForgotPassword = () => {

    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Welcome Back 👋</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group form-check">
                    <div className="remember-forgot-container">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Remember me
                        </label>
                        <span className="forgot-password-text" onClick={handleForgotPassword}>
                            Forgot password?
                        </span>
                    </div>
                </div>
                <button className="btn btn-primary login-button" onClick={() => handleLoginButton(email, password)}>Sign In</button>
            </form>
            <div className="social-login">
                <button className="btn btn-social btn-facebook"
                    onClick={handleLoginWithFacebook}>
                    <img src="https://img.icons8.com/fluency/48/facebook-new.png"
                        alt="Facebook Logo"
                        width="48"
                        height="48"
                        className="logo-fb" />
                    <span className="btn-text">Login with Facebook</span>
                </button>
                <button
                    className="btn btn-social btn-google"
                    onClick={handleLoginWithGoogle}
                >
                    <img
                        src="https://img.icons8.com/color/48/google-logo.png"
                        alt="Google Logo"
                        width="48"
                        height="48"
                    />
                    <span className="text-google">Login with Google</span>
                </button>
            </div>
            <p className="register-link">
                Don't have an account?{" "}
                <span className="register-link-text" onClick={handleRegisterButton}>
                    Register
                </span>
            </p>
            <p className="guest-connection">Connection as guest</p>
        </div>
    );
}

export default Login;
