import { NavLink } from "react-router-dom";

const HotelSection = () => {
    return (
        <>
            {/* <!-- Hotel and Resorts --> */}
            <section className="hotelAndResort__section">
                <div className="container py-5">
                <div className="section-heading left-bordered ms-4 position-relative lh-1 py-2 mb-5">
                    <h1 className="text-white">HOTEL & RESORTS</h1>
                    <p className="text-white gilroy-medium">Find the best Hotel & Resort deals for your next staycation</p>
                </div>

                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <NavLink activeClassName="active" to="/hotels/togawe-resort">
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/TogaweCoveResort.png")} height="300" className="card-img" alt="Tugawe Resort"/>
                        <div className="card-img-overlay pe-0">
                            <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">4.9</span></h2>
                            <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Tugawe Cove Resort</h5>
                            <p className=" mb-1 gilroy-light"><small>Caramoan, Camarines Sur</small></p>
                            <span>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                    </NavLink>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <a href="">
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/VillaCaceresHotel.png")} height="300" className="card-img" alt="Villa Caceres"/>
                        <div className="card-img-overlay pe-0">
                            <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">5.0</span></h2>
                            <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Villa Caceres Hotel</h5>
                            <p className=" mb-1 gilroy-light"><small>Naga City, Camarines Sur</small></p>
                            <span>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                    </a>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <a href="">
                        <div className="card text-white border-0">
                        <img src={require("./../../assets/images/StarMarkHotel.jpg")} height="300" className="card-img" alt="Star Mark"/>
                        <div className="card-img-overlay pe-0">
                            <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">4.9</span></h2>
                            <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Star Mark Hotel</h5>
                            <p className=" mb-1 gilroy-light"><small>Naga City, Camarines Sur</small></p>
                            <span>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                            </div>
                        </div>
                        </div>
                    </a>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/Casita-Mia-Bed.jpg")} height="300" className="card-img" alt="Casita Mia"/>
                        <div className="card-img-overlay pe-0">
                        <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">5.0</span></h2>
                        <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Casita Mia Hotel</h5>
                            <p className=" mb-1 gilroy-light"><small>Caramoan, Camarines Sur</small></p>
                            <span>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/RegalPlazaHotel.png")} height="300" className="card-img" alt="Regal Plaza"/>
                        <div className="card-img-overlay pe-0">
                        <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">4.2</span></h2>
                        <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Regal Plaza Hotel</h5>
                            <p className=" mb-1 gilroy-light"><small>Nabua, Camarines Sur</small></p>
                            <span>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star-o text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-white border-0">
                        <img src={require("./../../assets/images/BluePaseo.png")} height="300" className="card-img" alt="Blue Paseo"/>
                        <div className="card-img-overlay pe-0">
                        <h2><span className="badge gilroy-heavy text-end rounded-0 bg-yellow text-blue float-end">4.8</span></h2>
                        <div className="position-absolute bottom-0 lh-1">
                            <h5 className="m-0">Blue Paseo Grande Inn</h5>
                            <p className=" mb-1 gilroy-light"><small>Naga City, Camarines Sur</small></p>
                            <span>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                            <i className="fa fa-star-half-empty text-yellow mb-3" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn custom-btn border-0" type="button">CHECK PRICES</button>
                        <button className="btn custom-btn__reversed border-0" type="button">BOOK NOW</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default HotelSection