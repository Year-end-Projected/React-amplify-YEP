import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const handleMesProjetButton = () => {
    navigate("/MesProjets");
  };

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="container">
      <div className="photo-description">
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img
          className="photo-profil"
          alt="profil"
          src={file}
        />

        <div className="profile-details">
          <FontAwesomeIcon icon={faPenToSquare} />
          <ul className="list-profil">
            <li>
              <div>
                <span>Pseudo</span>
                <input></input>
              </div>
            </li>

            <li>
              <div>
                <span>Genre</span>
                <input></input>
              </div>
            </li>

            <li>
              <div>
                <span>Email</span>
                <input></input>
              </div>
            </li>

            <li>
              <div>
                <span>Age</span>
                <input></input>
              </div>
            </li>

            <li>
              <div>
                <span>Ville</span>
                <input></input>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bio-projet">
        <div className="button-annonce-portfolio">
          <div>
            <span>Lien vers mon portfolio</span>
            <input></input>
          </div>
        </div>

        <FontAwesomeIcon icon={faPenToSquare} />
        <div className="description-textarea">
          <label>
            Description:
            <textarea name="description" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
