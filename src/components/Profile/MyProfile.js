import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './MyProfile.css';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";

function My({ isAuth }) {
    const navigate = useNavigate();
    const handleMesProjetsButton = () => {
        navigate("/publications/my");
    };

    const handleProfileEditer = () => {
        navigate("/profile/my/edit");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 desccription-profil">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">SomeOne Famous</h4>
                            <h5>Creative Designer</h5>
                            <ul className="social-icons d-flex justify-content-center">
                                <li style={{ '--i': 1 }}>
                                    <a href="#">
                                        <span className="fab fa-facebook"></span>
                                    </a>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <a href="#">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li style={{ '--i': 3 }}>
                                    <a href="#">
                                        <span className="fab fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="description-1">
                    <div className="editer-profile" >
                    
                    <div className="button-edit">
                    <h5>editer-profil</h5>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={handleProfileEditer} />
                            </div>                     
                        </div>
                        <div className="button-annonce-portfolio">
                            <a href="https://giovannihkl.tumblr.com/" target="_blank">
                                <button className="button-projet">Lien vers mon portfolio</button>
                            </a>
                        </div>
                        <ul className="list-profil">
                            <li>PSEUDO</li>
                            <li>genre</li>
                            <li>ville</li>
                            <li>age</li>
                        </ul>
                        <div>
                            Je suis modèle et je recherche des collaborations
                        </div>
                        </div>
                </div>
                <div className="col-lg-8">
                    <div className="bio-projet">
                        
                        <div className="description">
                            <h3>Description :</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis,
                                magna in eleifend sollicitudin, mi urna viverra libero, eget tristique enim mauris vitae nisi.
                                Sed venenatis erat vitae nisl pharetra, sed efficitur est dapibus. Fusce a purus eget nibh ultrices volutpat.
                                Aenean ac ligula at tortor pulvinar consequat ac ut mauris.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis,
                                magna in eleifend sollicitudin, mi urna viverra libero, eget tristique enim mauris vitae nisi.
                                Sed venenatis erat vitae nisl pharetra, sed efficitur est dapibus. Fusce a purus eget nibh ultrices volutpat.
                                Aenean ac ligula at tortor pulvinar consequat ac ut mauris.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis,
                                magna in eleifend sollicitudin, mi urna viverra libero, eget tristique enim mauris vitae nisi.
                                Sed venenatis erat vitae nisl pharetra, sed efficitur est dapibus. Fusce a purus eget nibh ultrices volutpat.
                                Aenean ac ligula at tortor pulvinar consequat ac ut mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function MyProfile({ isAuth }) {
    // console.log(isAuth);
    return isAuth ? (
        <My isAuth={isAuth} />
    ) : (
        <div className="not-authenticated">
            <p>You are not logged in. Please </p>
            <Link to="/login">log in</Link>
        </div>
    );
}

export default MyProfile;
