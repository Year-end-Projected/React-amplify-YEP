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

function Publications({ isAuth, direction, ...args }, { publications }) {
    const [token, setToken] = useState([]);
    const [data, setData] = useState([]);
    const apiLogin = new ApiLogin("user@user.com", "salut");
    const [selectedItem, setSelectedItem] = useState("");

    const [publication, setPublication] = useState([]);

    // const publicationsMap = [
    //     { id: 1, titre: "CASTING HOMME ENTRE 40 ET 50 ANS POUR TOURNAGE ", description: "Dans le cadre du Tournage d'une   série , nous sommes à la recherche: D'un homme caucasien âgé entre 40 et 50 ans, avec des cheveux et une barbe poivre et sel, mesurant environ 1m77, pesant environ 95kg et faisant du XL en haut et du 44 en bas ", ville: "Paris", type: "Long métrage", remunere: "Oui", image: "https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 2, titre: "Item 2", description: "grgegeg", ville: "Lyon", type: "Défilé", remunere: "Oui", image: "https://images.pexels.com/photos/3048347/pexels-photo-3048347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 3, titre: "CASTING COMÉDIENS 20-30 ANS POUR LONG-MÉTRAGE D’ÉPOQUE", description: "Urgent : Dans le cadre du tournage du long métrage d’époque 1940, réalisé par Antonin Baudry. (« Le Chant du Loup »). Produit par Pathe Prodexe. Nous recherchons Pour 2 silhouettes, 2 jeunes garçons (de préférence comédiens) pour interpréter 2 marins français. Bonne condition physique.Ages : 20/30 ans max", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "https://images.pexels.com/photos/3426680/pexels-photo-3426680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 4, titre: "CASTING MODÈLE FEMME ENTRE 20 ET 35 ANS POUR DEFILE MODE", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "https://images.pexels.com/photos/2446717/pexels-photo-2446717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 5, titre: "CASTING H/F PROCHES DE CHARTRES POUR FIGURATION LONG-MÉTRAGE", description: "POUR UN LONG METRAGE QUI SE TOURNERA A GASVILLE-OISÈME, NOUS RECHERCHONS DES FIGURANTS RESIDANT IMPERATIVEMENT A MOINS DE 20MIN DE GASVILLE-OISÈME PRES DE CHARTRES ET ETANT IMPERATIVEMENT VÉHICULÉ, DES HOMMES ET FEMMES ENTRE 16 et 80 ANS ", ville: "Lyon", type: "Long métrage", remunere: "Oui", image: "" },
    //     { id: 6, titre: "CASTING H/F POUR POUR COURT METRAGE A LYON", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 7, titre: "Item 7", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 8, titre: "CASTING MODÈLE ENTRE 30 ET 35 ANS POUR SHOOTING PHOTO ET VIDÉO", description: "Dans le cadre d'un Shooting photo et vidéo autour d'une gamme de taie d'oreiller en soie, nous sommes à la recherche :,D'une modèle caucasienne âgée entre 30 et 35 ans, expérimentée, avec une belle peau et des cheveux longs blonds", ville: "Lyon", type: "Shooting", remunere: "Oui", image: "https://images.pexels.com/photos/1097768/pexels-photo-1097768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 9, titre: "Item 9", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 10, titre: "Item 10", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 11, titre: "CASTING MODÈLE FEMME ENTRE 20 ET 35 ANS POUR SHOOTING PHOTO", description: "Dans le cadre de shootings photos prêt-à-porter, nous sommes à la recherche:De modèles féminins âgées entre 20 et 35 ans, mesurant entre 1,65m et 1,80m, taille 36, à l’aise devant l’objectif en studio comme en extérieur", ville: "Lyon", type: "Shooting", remunere: "Oui", image: "" },
    //     { id: 12, titre: "Item 12", description: "grgegeg", ville: "Nantes", type: "Shooting", remunere: "Non", image: "https://media.istockphoto.com/id/1436684245/fr/photo/des-mannequins-sur-un-podium-lors-dun-d%C3%A9fil%C3%A9-de-mode.jpg?s=2048x2048&w=is&k=20&c=GRn9162GOAZhvvDyWuAdaePaW_Pk11IJrqikWZgarVg=" },
    //     { id: 13, titre: "CASTING HOMME ENTRE 20 ET 28 ANS POUR TOURNAGE SERIE TÉLÉVISÉE", description: "Dans le cadre du Tournage d'une émission télévisée, nous sommes à la recherche:un jeune homme caucasien âgé entre 20 et 28 ans", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 14, titre: "Item 14", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 15, titre: "Item 15", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "" },
    //     { id: 16, titre: "Item 16", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 17, titre: "Item 17", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "" },
    //     { id: 18, titre: "Item 18", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "" },
    //     { id: 19, titre: "Item 19", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 20, titre: "Item 20", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "" },
    //     { id: 21, titre: "CASTING HOMME NOIR MINCE 30-60 ANS POUR LONG-MÉTRAGE", description: "Pour un long métrage cinéma dont le tournage aura lieu à Paris et en Hongrie, je recherche :– Homme noir, 30/60 ans, plutôt sec, mince, visage un peu creusé, usé, Il fait une crise de nerfs après une attente de plusieurs heures à l’office des apatrides ", ville: "Paris", type: "Long métrage", remunere: "Non", image: "https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 22, titre: "Item 22", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 23, titre: "Item 23", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "" },
    //     { id: 24, titre: "CASTING MODÈLE CAUCASIENNE ENTRE 30 ET 35 ANS POUR SHOOTING PHOTO ET VIDÉO", description: "grgegeg", ville: "Paris", type: "Shooting", remunere: "Oui", image: "" },
    //     { id: 25, titre: "Item 25", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 26, titre: "Item 26", description: "grgegeg", ville: "Nantes", type: "Shooting", remunere: "Oui", image: "https://images.unsplash.com/photo-1554881070-74595ca2b74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    //     { id: 27, titre: "Item 27", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "" },
    //     { id: 28, titre: "Item 28", description: "grgegeg", ville: "Paris", type: "Long métrage", remunere: "Oui", image: "https://images.pexels.com/photos/7212453/pexels-photo-7212453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    //     { id: 29, titre: "Item 29", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Oui", image: "" },
    //     { id: 30, titre: "Item 30", description: "grgegeg", ville: "Nantes", type: "Shooting", remunere: "Non", image: "https://plus.unsplash.com/premium_photo-1663957821802-4969fe6a0347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    //     { id: 31, titre: "Item 31", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "" },
    //     { id: 32, titre: "Item 32", description: "grgegeg", ville: "Paris", type: "Long métrage", remunere: "Oui", image: "" },
    //     { id: 33, titre: "Item 33", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "" },
    //     { id: 34, titre: "Item 34", description: "grgegeg", ville: "Nantes", type: "Shooting", remunere: "Oui", image: "https://plus.unsplash.com/premium_photo-1676507817497-e99ff7c6a5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    //     { id: 35, titre: "Item 35", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "" },
    //     { id: 36, titre: "Item 36", description: "grgegeg", ville: "Paris", type: "Défilé", remunere: "Oui", image: "https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    //     { id: 37, titre: "Item 37", description: "grgegeg", ville: "Lyon", type: "Court métrage", remunere: "Non", image: "" },
    //     { id: 38, titre: "Item 38", description: "grgegeg", ville: "Nantes", type: "Shooting", remunere: "Oui", image: "" },
    //     { id: 39, titre: "Item 39", description: "grgegeg", ville: "Angers", type: "Défilé", remunere: "Oui", image: "https://images.unsplash.com/photo-1554882195-8cf792f9a571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
    // ];
    const publicationsMap = [];
    const imageTab = [
        "https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3048347/pexels-photo-3048347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3426680/pexels-photo-3426680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2446717/pexels-photo-2446717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1097768/pexels-photo-1097768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://media.istockphoto.com/84245/fr/photo/des-mannequins-sur-un-podium-lors-dun-d%C3%A9fil%C3%A9-de-mode.jpg?s=2048x2048&w=is&k=20&c=GRn9162GOAZhvvDyWuAdaePaW_Pk11IJrqikWZgarVg=",
        "https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1554881070-74595ca2b74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.pexels.com/photos/7212453/pexels-photo-7212453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://plus.unsplash.com/premium_photo-1663957821802-4969fe6a0347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://plus.unsplash.com/premium_photo-1676507817497-e99ff7c6a5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        "https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1554882195-8cf792f9a571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        "https://images.pexels.com/photos/4629627/pexels-photo-4629627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3048347/pexels-photo-3048347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3426680/pexels-photo-3426680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2446717/pexels-photo-2446717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1097768/pexels-photo-1097768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://media.istockphoto.com/84245/fr/photo/des-mannequins-sur-un-podium-lors-dun-d%C3%A9fil%C3%A9-de-mode.jpg?s=2048x2048&w=is&k=20&c=GRn9162GOAZhvvDyWuAdaePaW_Pk11IJrqikWZgarVg=",
        "https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1554881070-74595ca2b74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.pexels.com/photos/7212453/pexels-photo-7212453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://plus.unsplash.com/premium_photo-1663957821802-4969fe6a0347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://plus.unsplash.com/premium_photo-1676507817497-e99ff7c6a5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        "https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1554882195-8cf792f9a571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    ];

    const [selectedItemType, setSelectedItemType] = useState(null);

    const handleDropdownItemClick = item => {
        setSelectedItemType(item);
    };

    useEffect(() => {
        fetch('http://13.37.95.175:8000/api/publications')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                console.log(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
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
            <div className="page-annonce">
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
                                Reset
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
                            ? data.map((data, index) => (
                                <div className="div-annonces" key={data.id}>
                                    <div className="my-2">
                                        <div>
                                            <img className="image-publication" src={imageTab[index]} alt="Description de l'image" width="50px" length="50px" />
                                        </div>
                                    </div>
                                    <CardBody>
                                    </CardBody>
                                    <div className="info-annonce">
                                        <h2>{data.titre}</h2>
                                        <p>{data.description}</p>
                                        <p>{data.Ville}</p>
                                        <p>{data.type}</p>
                                        <p>rémunéré : {data.rémunératon}</p>
                                    </div>
                                    {isAuth && (
                                        <div className="button-inside-annonce">
                                            <button className="button-projet">postuler</button>
                                        </div>
                                    )}
                                </div>
                            ))
                            : data
                                .filter(data => {
                                    const typeCondition = selectedItemType === null || data.type === selectedItemType;
                                    const communeCondition = selectedCommune === '' || data.Ville.toLowerCase() === selectedCommune.toLowerCase();
                                    return typeCondition && communeCondition;
                                })
                                .map(data => (
                                    <div className="div-annonces" key={data.id}>
                                        <div className="my-2">
                                            <div>
                                                <img
                                                    className="image-publication"
                                                    src={data.image} alt="Description de l'image" width="50px" length="50px" />
                                                <CardText>
                                                    <small className="text-muted">
                                                        Publié par
                                                    </small>
                                                    <small className="text-muted">
                                                        <p>start:</p>
                                                        <p>end:</p>
                                                    </small>
                                                </CardText>
                                            </div>

                                        </div>

                                        <CardBody>

                                        </CardBody>

                                        <div>
                                            <h2>{data.titre}</h2>
                                            <p>{data.description}</p>
                                            <p>{data.ville}</p>
                                            <p>{data.type}</p>
                                            <p>rémunéré : {data.remunere}</p>

                                        </div>
                                        <div className="button-inside-annonce">
                                            <button className="button-projet">postuler</button>
                                        </div>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </>)

}

export default Publications;
