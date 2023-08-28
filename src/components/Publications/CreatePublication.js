import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import PropTypes from "prop-types";
import "./CreatePublication.css";

const CreatePublication = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [selectedItem, setSelectedItem] = useState("");

    const handleDropdownItemClick = item => {
        setSelectedItem(item);
      };
    


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [communes, setCommunes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCommune, setSelectedCommune] = useState('');

    useEffect(() => {
        const fetchCommunes = async () => {
            try {
                const response = await fetch('https://geo.api.gouv.fr/communes');
                const data = await response.json();
                setCommunes(data);
            } catch (error) {
                console.error('Error fetching communes:', error);
            }
        };

        fetchCommunes();
    }, []);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);

        if (event.key === 'Enter') {
            handleSelectCommune(event.target.value);
        }
    };

    const handleSelectCommune = (communeName) => {
        const selectedCommune = filteredCommunes.find(
            (commune) => commune.nom.toLowerCase() === communeName.toLowerCase()
        );
        if (selectedCommune) {
            setSelectedCommune(selectedCommune.nom);
            setSearchTerm(''); // Clear the input
        }
    };

    const handleButtonClick = () => {
        if (selectedCommune !== '' && filteredCommunes.length > 0) {
            const selectedCommune = filteredCommunes.find(
                (commune) => commune.nom.toLowerCase() === searchTerm.toLowerCase()
            );
            if (selectedCommune) {
                setSelectedCommune(selectedCommune.nom);
                setSearchTerm(''); // Clear the input
            }
        }
    };

    const filteredCommunes = communes.filter((commune) =>
        commune.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <p style={{ fontSize: 18 }}>{item.nom}</p>
    );



    return (
        <>
            <h2>Créer un annonce</h2>
            <div className="container">
                <div className="div-filtreCreate">
                    <h2>Type de Projet</h2>
                    <div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem onClick={() => handleDropdownItemClick('Long métrage')}>
              Long métrage
            </DropdownItem>
            <DropdownItem onClick={() => handleDropdownItemClick('Court métrage')}>
              Court métrage
            </DropdownItem>
            <DropdownItem onClick={() => handleDropdownItemClick('Shooting')}>
              Shooting
            </DropdownItem>
            <DropdownItem onClick={() => handleDropdownItemClick('Défilé')}>
              Défilé
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  
      {/* <h5>Selected item: {selectedItem}</h5> */}
      <p style={{ fontSize: 18 }}>Type de projet: {selectedItem}</p>
                    </div>
                    <div>
                        <h4>Ville</h4>
                        <div style={{ padding: 16 }}>
                            <h1 style={{ fontSize: 24 }}>Communes</h1>
                            <input
                                type="text"
                                style={{ height: 40, marginBottom: 16, padding: 8 }}
                                placeholder="Enter commune name"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                                onKeyDown={handleSearchTermChange} // Listen for the Enter key press
                            />
                            {/* <button onClick={handleButtonClick}>Select Commune</button> */}
                            {selectedCommune !== '' && (
                                <div style={{ marginTop: 16 }}>
                                    <p style={{ fontSize: 18 }}>Selected commune: {selectedCommune}</p>
                                </div>
                            )}
                            {searchTerm !== '' && (
                                <ul>
                                    {filteredCommunes.slice(0, 100).map((item) => (
                                        <li
                                            key={item.code.toString()}
                                            style={{ fontSize: 18, cursor: 'pointer' }}
                                            onClick={() => handleSelectCommune(item.nom)}
                                        >
                                            {item.nom}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>Rémunéré</h4>

                        <div>
                            <input type="radio" value="oui" name="gender" /> Oui
                            <input type="radio" value="non" name="gender" /> Non
                        </div>
                    </div>
                </div>

                <div className="div-annoncesCreate">
                    {/* <Card className="my-2"> */}
                    <div className="cardAnnonceCreate">
                   <div>
                            <h2>Add Image:</h2>
                            <input type="file" onChange={handleChange} />
                            <img className="photo-profil"
                                // alt="profil"
                                src={file} />
                    </div>

                        {/* <CardBody className="CardCreate"> */}
             
                            {/* <CardTitle className="h5"> */}
                                Titre
                                <input></input>
                            {/* </CardTitle> */}
                            {/* <CardText> */}
                                Description
                                <textarea></textarea>
                            {/* </CardText> */}
                            {/* <CardText> */}
                                
                            {/* </CardText> */}
                        
                        {/* </CardBody> */}
                        </div>
                    {/* </Card> */}
                </div>
            </div>
        </>
    );
};

CreatePublication.propTypes = {
    direction: PropTypes.string
};

export default CreatePublication;
