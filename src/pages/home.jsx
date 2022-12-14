import FooterMain from "../components/FooterMain"
// import DetinationSection from "../components/Home/DestinationSection"
import HeroSection from "../components/Home/HeroSection"
import HotelSection from "../components/Home/HotelSection"
import TourSection from "../components/Home/TourSection"

const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <DetinationSection/> */}
            <TourSection/>
            <HotelSection/>
            <FooterMain/>
        </>
    )
}

export default Home