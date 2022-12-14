
const DetinationSection = () => {
    return (
        <>
            {/* <! Featured Destination */}
  <section className="container destination-section py-5">
    <div className="section-heading left-bordered ms-4 position-relative lh-1 py-2 mb-5">
      <h1 className="text-blue">FEATURED DESTINATION</h1>
      <p className="gilroy-medium">Take a look at the best places in Cam Sur</p>
    </div>
    {/* Destination Carousel  */}
        <div className="carousel-content mb-5">
        <div className="row">
            <div className="slider destination-slider">
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="WaterSports Complex" src={require("./../../assets/images/watersports.png" )}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">WaterSports Complex</h4>
                    <p className="card-text">Naga City, Camarines Sur</p>
                    <a href="/tour/waterSports.html">
                    <button className="btn custom-btn border-0">
                        Explore More
                    </button>
                    </a>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Lahos Island" src={require("./../../assets/images/LahosIsland.png" )}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Lahos Island</h4>
                    <p className="card-text">Caramoan, Camarines Sur</p>
                    <a href="/tour/lahosIsland.html">
                    <button className="btn custom-btn border-0">
                        Explore More
                    </button>
                    </a>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Aguirangan Island" src={require("./../../assets/images/AguiranganIsland.png")}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Aguirangan Island</h4>
                    <p className="card-text">Presentacion, Camarines Sur</p>
                    <button className="btn custom-btn border-0">Explore More</button>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Siruma Beach" src={require("./../../assets/images/SirumaBeach.png")}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Siruma Beach</h4>
                    <p className="card-text">Siruma, Camarines Sur</p>
                    <button className="btn custom-btn border-0">Explore More</button>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Atulayan Island" src={require("./../../assets/images/AtulayanIsland.png")}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Atulayan Island</h4>
                    <p className="card-text">Sagnay, Camarines Sur</p>
                    <button className="btn custom-btn border-0">Explore More</button>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Matukad Island" src={require("./../../assets/images/MatukadIsland.png")}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Matukad Island</h4>
                    <p className="card-text">Caramoan, Camarines Sur</p>
                    <button className="btn custom-btn border-0">Explore More</button>
                </div>
                </div>
            </div>
            <div className="rounded-4">
                <div className="card">
                <img className="img-fluid" alt="Cagbalinad Island" src={require("./../../assets/images/CagbalinadIsland.png")}/>
                <div className="card-body lh-1">
                    <h4 className="card-title text-blue">Cagbalinad Island</h4>
                    <p className="card-text">Caramoan, Camarines Sur</p>
                    <button className="btn custom-btn border-0">Explore More</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
        </>
    )
}

export default DetinationSection