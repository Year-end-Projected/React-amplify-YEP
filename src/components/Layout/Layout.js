import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">
                    <img src="https://capsup.cio-montlucon.fr/wp-content/uploads/2016/10/th-1.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <Link className="navbar-brand" to="/">ArtLink</Link>
                </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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

const Footer = () => {
    return (
        <>
            <footer className="footer text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 h-100 text-center text-lg-start my-auto">
                            <div className="d-flex">
                                <div className="row w-100">
                                    <div className="col-md-4">
                                        <p className="fw-bold">A propos</p>
                                        <ul className="text-light">
                                            <li><a href="https://www.ebp.com/groupe-ebp" target="_blank">Groupe EBP</a></li>
                                            <li><a href="https://www.ebp.com/temoignage" target="_blank">Cas clients</a></li>
                                            <li><a href="https://www.ebp.com/presse" target="_blank">Presse</a></li>
                                            <li><a href="https://www.ebp.com/blog" target="_blank">Blog</a></li>
                                            <li><a href="https://www.ebp-recrute.com/" target="_blank">Carrière chez EBP</a></li>
                                            <li><a href="https://www.ebp.com/partenaires-offres-emploi" target="_blank">Carrière chez nos partenaires</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="fw-bold">Nous contacter</p>
                                        <ul className="text-light">
                                            <li><a href="mailto:infos.fr@ebp.com">infos.fr@ebp.com</a></li>
                                            <li><a href="tel:01 34 94 80 00">01 34 94 80 00</a></li>
                                        </ul>
                                        <p className="fw-bold">Siège social</p>
                                        <ul className="text-light list-unstyled ms-3">
                                            <li>ZA du Bel Air</li>
                                            <li>Rue de Cutesson</li>
                                            <li>78125 GAZERAN</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="fw-bold">Suivez-nous sur les réseaux sociaux</p>
                                        <ul className="d-flex text-light list-unstyled gap-2 ms-3">
                                            <li><a href="https://www.facebook.com/ebpinformatique/"><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/ebp_france?lang=fr"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.youtube.com/user/EBPinformatique"><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/235667/admin/"><i className="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href="https://www.instagram.com/ebp_informatique/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                        <div className="w-100 ms-5">
                                            <a href="https://www.ebp.com/" data-wpel-link="external" target="_blank" rel="external noopener noreferrer">
                                                <img width="200" height="92" src="https://hubbix.fr/wp-content/uploads/2022/09/LOGO_EBP_2018_RVB_monochrome_blanc_200x92.png" className="vertical-align-middle d-inline-block" alt="Logo EBP" loading="lazy" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="text-center small mb-4 mb-lg-0">&copy; Annuaire Ecole Futée 2023. Tous droits réservés.</p> */}
                        </div>
                    </div>
                </div>
            </footer>
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
