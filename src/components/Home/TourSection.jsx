import { NavLink } from "react-router-dom";

const TourSection = () => {
    return (
        <>
            {/* <!-- Tour Packages --> */}
            <section className="container top-tour__packages py-5">
                <div className="section-heading right-bordered me-4 text-end position-relative lh-1 py-2 mb-5">
                <h1 className="text-blue">TOP TOUR PACKAGES</h1>
                <p className="gilroy-medium">We offer the best tour packages that fits all your needs</p>
                </div>

                <div className="tour-package__content">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <NavLink activeClassName="active" to="/tour/caramoan-tour">
                        <h5 className="text-muted">CARAMOAN, CAM SUR</h5>
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/CaramoanTour.png")} height="250" className="card-img" alt="Caramoan Tour"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-end lh-1 gilroy-heavy">3D <br/> 2N</h3>
                            <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">ISLAND HOPING</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 1,699.00</p>
                            </div>
                        </div>
                        </div>
                    </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <a href="#">
                        <h5 className="text-muted">SIRUMA, CAM SUR</h5>
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/SirumaBeach.png")} height="250" className="card-img" alt="Siruma Beach"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-end lh-1 gilroy-heavy">2D <br/> 1N</h3>
                            <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">SIRUMA TOUR (RESORT)</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 1,899.00</p>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <a href="#">
                        <h5 className="text-muted">GARCHITORENA, CAM SUR</h5>
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/GarchiTour.png")} height="250" className="card-img" alt="Garchitorena"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-end lh-1 gilroy-heavy">3D <br/> 2N</h3>
                            <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">GARCHITORENA TOUR</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 2,900.00</p>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="text-muted">PRESENTACION, CAM SUR</h5>
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/AguiranganIsland.png")} height="250" className="card-img" alt="Aguirangan"/>
                        <div className="card-img-overlay">
                        <h3 className="card-title text-end lh-1 gilroy-heavy">2D <br/> 1N</h3>
                        <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">AGIURANGAN ISLAND</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 1,599.00</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="text-muted">NAGA, CAM SUR</h5>
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/NagaTour.png")} height="250" className="card-img" alt="Naga Tour"/>
                        <div className="card-img-overlay">
                        <h3 className="card-title text-end lh-1 gilroy-heavy">2D <br/>1N</h3>
                        <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">NAGA CITY TOUR</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 2,499.00</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="text-muted">SAGNAY, CAM SUR</h5>
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/AtulayanIsland.png")} height="250" className="card-img" alt="Atulayan"/>
                        <div className="card-img-overlay">
                        <h3 className="card-title text-end lh-1 gilroy-heavy">3D <br/> 2N</h3>
                        <div className="position-absolute bottom-0 lh-1">
                            <h4 className="m-0">ATULAYAN TOUR</h4>
                            <p className="text-yellow mb-3">Starts from PHP. 2,999.00</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button type="button" className="custom-btn border-0 d-block m-auto btn btn-lg mt-5 px-5">
                    View All
                </button>
                </div>
            </section>
        </>
    )
}

export default TourSection