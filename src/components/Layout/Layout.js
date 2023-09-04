import { Outlet, Link } from "react-router-dom";
import './Layout.css';

import React, { useState } from 'react';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import PropTypes from 'prop-types';

const Navbar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">
                    <img src="https://capsup.cio-montlucon.fr/wp-content/uploads/2016/10/th-1.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <Link className="navbar-brand" to="/">ArtLink</Link>
                </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a ><Link className="navbar-brand" to="/">Accueil</Link><span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a ><Link className="navbar-brand profil" to="/profile/my">Profil</Link><span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a ><Link className="navbar-brand profil" to="/publications">Annonces</Link><span className="sr-only">(current)</span></a>
                        </li>
                    </ul> */}

                    <div className="d-flex p-5">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                        <DropdownToggle caret>Menu</DropdownToggle>
                        <DropdownMenu {...args}>
         
                        <DropdownItem><Link className="navbar-brand" to="/">Accueil</Link></DropdownItem>
                        <DropdownItem><Link className="navbar-brand profil" to="/profile/my">Profil</Link></DropdownItem>
                        <DropdownItem><Link className="navbar-brand profil" to="/publications">Annonces</Link></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"><Link className="navbar-brand" to="/">Accueil</Link><span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link"><Link className="navbar-brand profil" to="/profile/my">Profil</Link><span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link"><Link className="navbar-brand profil" to="/publications">Annonces</Link><span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </input> */}
                    </form>
                </div>
            </nav>
        </>
    );
};

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;
