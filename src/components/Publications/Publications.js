import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import PropTypes from "prop-types";
import "./Publications.css";
import ApiService from "../../services/ApiService";
import ApiLogin from "../../services/ApiLogin";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Publi({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [selectedItem, setSelectedItem] = useState("");

    const handleDropdownItemClick = item => {
        setSelectedItem(item);
      };
    

    return (
        <>
            <div className="container">
                <div className="div-filtre">
                    <h2>Filtre</h2>
                    <div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu {...args}>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem onClick={() => handleDropdownItemClick('Some Action')}>
                Some Action
              </DropdownItem>
              {/* Other DropdownItems */}
            </DropdownMenu>
          </Dropdown>
          {/* Display the selected item in the h1 tag */}
          <h1>Selected item: {selectedItem}</h1>
    
                    </div>
                    <div>
                        <h4>Ville</h4>
                    </div>
                    <div>
                        <h4>Rémunéré</h4>
                        <div>
                            <input type="radio" value="oui" name="gender" /> Oui
                            <input type="radio" value="non" name="gender" /> Non
                        </div>
                    </div>
                </div>

                <div className="div-annonces">
                    <Card className="my-2">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                                className="photo-annonce"
                                alt="profil"
                            />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Card Title</CardTitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                is a little bit longer.
                            </CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
};

function Publications2() {
    const [data, setData] = useState([]);
    const api = new ApiService();

    useEffect(() => {
        api.getPublications().then(async data => {
            setData(data);
        });
    }, []);

    console.log(data);
    return (
        <>hello</>
    )
}

function Publications({ direction, ...args },{ publications }) {
    const [token, setToken] = useState([]);
    const [data, setData] = useState([]);
    const apiLogin = new ApiLogin("user@user.com", "salut");
    const apiService = new ApiService();
    const [selectedItem, setSelectedItem] = useState("");

///////////////////////////////////////////////  Bertin Modification //////////////////
const [publication, setPublication] = useState([]);

useEffect(() => {
    // Make the API request when the component mounts
    axios.get('http://127.0.0.1:8001/api/publications')
      .then(response => {
        // Assuming the API response contains an array of data
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  /////////////////////////////////////////////////////////////

  const publicationsMap = [
    { id: 1, titre: "Item 1", description:"grgegeg", ville:"Paris", type:"Long métrage", remunere:"Oui", image: "https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, titre: "Item 2", description:"grgegeg", ville:"Lyon", type:"Défilé", remunere:"Oui",image: "https://images.pexels.com/photos/3206167/pexels-photo-3206167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, titre: "Item 3", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non",},
    { id: 4, titre: "Item 4", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non",},
    { id: 5, titre: "Item 5", description:"grgegeg", ville:"Lyon", type:"Long métrage", remunere:"Oui",},
    { id: 6, titre: "Item 6", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui",},
    { id: 7, titre: "Item 7", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui",},
    { id: 8, titre: "Item 8", description:"grgegeg", ville:"Lyon", type:"Shooting", remunere:"Oui",},
    { id: 9, titre: "Item 9", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui",},
    { id: 10, titre: "Item 10", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 11, titre: "Item 11", description:"grgegeg", ville:"Lyon", type:"Shooting", remunere:"Oui"},
    { id: 12, titre: "Item 12", description:"grgegeg", ville:"Nantes", type:"Shooting", remunere:"Non"},,
    { id: 13, titre: "Item 13", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 14, titre: "Item 14", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 15, titre: "Item 15", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non"},,
    { id: 16, titre: "Item 16", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 17, titre: "Item 17", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non"},
    { id: 18, titre: "Item 18", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
    { id: 19, titre: "Item 19", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 20, titre: "Item 20", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non"},
    { id: 21, titre: "Item 21", description:"grgegeg", ville:"Paris", type:"Long métrage", remunere:"Non"},
    { id: 22, titre: "Item 22", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 23, titre: "Item 23", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
    { id: 24, titre: "Item 24", description:"grgegeg", ville:"Paris", type:"Shooting", remunere:"Oui"},
    { id: 25, titre: "Item 25", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 26, titre: "Item 26", description:"grgegeg", ville:"Nantes", type:"Shooting", remunere:"Oui"},
    { id: 27, titre: "Item 27", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
    { id: 28, titre: "Item 28", description:"grgegeg", ville:"Paris", type:"Long métrage", remunere:"Oui"},
    { id: 29, titre: "Item 29", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Oui"},
    { id: 30, titre: "Item 30", description:"grgegeg", ville:"Nantes", type:"Shooting", remunere:"Non"},
    { id: 31, titre: "Item 31", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
    { id: 32, titre: "Item 32", description:"grgegeg", ville:"Paris", type:"Long métrage", remunere:"Oui"},
    { id: 33, titre: "Item 33", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non"},
    { id: 34, titre: "Item 34", description:"grgegeg", ville:"Nantes", type:"Shooting", remunere:"Oui"},
    { id: 35, titre: "Item 35", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
    { id: 36, titre: "Item 36", description:"grgegeg", ville:"Paris", type:"Défilé", remunere:"Oui"},
    { id: 37, titre: "Item 37", description:"grgegeg", ville:"Lyon", type:"Court métrage", remunere:"Non"},
    { id: 38, titre: "Item 38", description:"grgegeg", ville:"Nantes", type:"Shooting", remunere:"Oui"},
    { id: 39, titre: "Item 39", description:"grgegeg", ville:"Angers", type:"Défilé", remunere:"Oui"},
  ];




///////////////////////////////////////////////////////////

const [selectedItemType, setSelectedItemType] = useState(null);
    
const handleDropdownItemClick = item => {
    setSelectedItemType(item);
  };
    

     useEffect(() => {
         apiLogin.getToken().then(async token => {
             setToken(token);
         });
         const apiService = new ApiService(token);
         apiService.getPublications().then(async data => {
             console.log(data);
         });
     }, []);

     useEffect(() => {
        apiService.getPublications().then(async data => {
            setData(data);
            console.log(data);
        });
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const navigate = useNavigate();
  
    const handleMonAnnonce = () => {
      navigate("/publications/create");
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
        } else {
            setSelectedCommune('');
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
        <div className="create-annonce">
        <Button onClick={handleMonAnnonce}>
                    Créer une annonce
                </Button>
                </div>
                
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
            <DropdownItem onClick={() => handleDropdownItemClick(null)}>
              Rest
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  
      {/* <h5>Selected item: {selectedItem}</h5> */}
      <p style={{ fontSize: 18 }}>{selectedItem}</p>
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
            onKeyDown={handleSearchTermChange}
        /><Button className="restCommune" onClick={() => setSelectedCommune('')}>
        Rest
    </Button>
        {selectedCommune !== '' && (
            <div style={{ marginTop: 16 }}>
                <p style={{ fontSize: 18 }}>{selectedCommune}</p>
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
        {/* <Button className="restCommune" onClick={() => setSelectedCommune('')}>
            Rest
        </Button> */}
    </div>
</div>
                    <div>
                        <h4>Rémunéré</h4>

                        <div>
                            <input type="radio" value="Oui" name="remunere" /> Oui
                            <input type="radio" value="Non" name="remunere" /> Non
                    
                        </div>
                        
                    </div>
                </div>




            <div className="container-annonces container-2">
            <div className="divMap1">
  {selectedItemType === null && selectedCommune === ''
    ? publicationsMap.map(publication => (
        <div className="container-publication" key={publication.id}>
          <h2>{publication.titre}</h2>
          <p>{publication.description}</p>
          <p>{publication.ville}</p>
          <p>{publication.type}</p>
          <p>rémunéré : {publication.remunere}</p>
          {/* Ajoutez l'image en utilisant le lien que vous avez fourni */}
          <img src={publication.image} alt="Description de l'image" width="200px" />
        </div>
      ))
    : publicationsMap
        .filter(publication => {
          const typeCondition = selectedItemType === null || publication.type === selectedItemType;
          const communeCondition = selectedCommune === '' || publication.ville.toLowerCase() === selectedCommune.toLowerCase();
          return typeCondition && communeCondition;
        })
        .map(publication => (
          <div className="container-publication" key={publication.id}>
            <h2>{publication.titre}</h2>
            <p>{publication.description}</p>
            <p>{publication.ville}</p>
            <p>{publication.type}</p>
            <p>rémunéré : {publication.remunere}</p>
            {/* Ajoutez l'image en utilisant le lien que vous avez fourni */}
            <img src={publication.image} alt="Description de l'image" width="200px" />
        </div>
        ))}
</div>


            <div className="container">


    
            <div className="div-annonces">
            <Card className="my-2">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="photo-annonce"
                                alt="profil"
                            />
                        </div>
                        <CardBody>           
                            <CardText>
                            <small className="text-muted">

 {/*{record.Auteur && <p>Publié par {record.Auteur.pseudo}</p>} */} Publié par
                                </small>
                                <small className="text-muted">
                                    {/* {record.Auteur && <p>start:</p> <p>end:</p> {record.Auteur.pseudo}</p>} */} 
                                    <p>start:</p> 
                                    <p>end:</p>
                                </small>
                            </CardText>
                        </CardBody>
                    </Card>
                    </div>
                
                {/* <div className="div-annonces"> */}
                {/* {data.map((record) => ( */}
                    <div className="container-inside">
                        
                        <div className="description-titre-button">
                            <p>Titre</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis,
                                magna in eleifend sollicitudin, mi urna viverra libero, eget tristique enim mauris vitae nisi.
                                Sed venenatis erat vitae nisl pharetra, sed efficitur est dapibus. Fusce a purus eget nibh ultrices volutpat.
                                Aenean ac ligula at tortor pulvinar consequat ac ut mauris.
                            </p>
                            
                        </div>

                        <div className="button-inside-annonce">
                            <button className="button-projet">postuler</button>
                        </div>

                        <div className="options">
                            <p>shooting</p>
                            <p>Paris</p>
                            <p>Rémunéré</p>
                        </div>
                        
                    </div>


                    
                {/* ))} */}
                </div>
            {/* </div> */}


            
            <div className="container">
                
                <div className="div-annonces">
                {/* {data.map((record) => ( */}
                    <Card className="my-2">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="photo-annonce"
                                alt="profil"
                            />
                        </div>
                        <CardBody>
                            <CardText>
                                <small className="text-muted">
                                    {/* {record.Auteur && <p>Publié par {record.Auteur.pseudo}</p>} */} Publié par
                                </small>
                            </CardText>
                        </CardBody>
                    </Card>
                {/* ))} */}
                </div>
            </div>
            </div>
            
            

        </>)

}

export default Publications;
