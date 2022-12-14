import NavigationBar from "../Navbar"

const AboutSection = () => {
    return (
        <>
            <header className="about__header bg-dark mb-5">
                <NavigationBar />
                <div className="header-content text-white text-center position-relative">
                    <img src={require('./../../assets/images/aboutPage_BG.png')} className="w-100" alt="Header" />
                    <div className="container">
                        <div className="overlay-bg">
                        <h1 className="position-absolute">ABOUT</h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="container about_context">
                <h2 className="text-center text-blue text-uppercase">sports and adventure capital of the philippines</h2>
                <p className="gilroy-medium fs-5 my-5"><span className="gilroy-bold">Camarines sur</span> is one of the provinces in the Philippines located in Bicol Region
                in Luzon famous for its exciting tourist spots. The water sports activities and island hopping 
                destinations are the major drawns in the tourism industry of the province. Influx of tourist 
                keeps on increasing every year to visit its pristine beaches, paradise islands, mountain peaks, 
                lakes, hot springs and waterfalls amonth others. The province of Camarines Sur or simply Camsur is 
                boredered by Albay (south), Maqueda Channel (east), Camarines Norte and Quezon (northwest). 
                Over 1,950,000  total residents of the province speak in Bikol, Tagalog and English languages. 
                Though Pili is the official capital city, most of the tourist attractions are located in Naga City.
                </p>
            </section>
            <div className="container pt-5 mb-5">
                <iframe title="map" className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991631.1423801519!2d123.03792487101128!3d13.86548079434112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1ee07ca034445%3A0xc9c8a9dd62206a4a!2sCamarines%20Sur!5e0!3m2!1sen!2sph!4v1669186108746!5m2!1sen!2sph" width="400" height="300" style={{border:`0`}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default AboutSection