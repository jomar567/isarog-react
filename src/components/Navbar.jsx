
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand d-flex align-content-center align-items-center px-4" href="#">
                <img src={require('../assets/images/Logo.png')} alt="Logo" height="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-4 collapse navbar-collapse justify-content-between px-4" id="navbar">
                    <ul className="navbar-nav mb-lg-0 m-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/" className="nav-link text-white mx-lg-2 gilroy-light">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-link text-white mx-lg-2 gilroy-light">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tour" activeClassName="active" className="nav-link text-white mx-lg-2 gilroy-light">
                                Tour
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/hotels/togawe-resort" activeClassName="active" className="nav-link text-white mx-lg-2 gilroy-light">
                                Hotels
                            </NavLink>
                        </li>
                    </ul>
                    <div className="search-bar">
                        <input type="text" className="form-control px-md-0 px-lg-3" placeholder="Search" />
                        <i className="fa fa-search text-white"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar