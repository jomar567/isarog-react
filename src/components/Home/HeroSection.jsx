import NavigationBar from "../Navbar"

const HeroSection = () => {
    return (
        <>
            <header className="vh-100 landingPage__header mb-5">
                <NavigationBar />
                <div className="header-content container text-white text-center">
                    <h1>EXPLORE</h1>
                    <h1>CAMARINES SUR</h1>
                    <h5>Discover the Sports and Adventure Capital of the Philippines</h5>
                    <button type="button" className="custom-btn border-0 btn btn-lg mt-5 px-5">
                        Explore Now <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default HeroSection