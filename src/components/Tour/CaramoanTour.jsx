import NavigationBar from "../Navbar"

const CaramoanTour = () => {
    return (
        <>
            <header className="caramoanTour__header bg-dark mb-5">
                <NavigationBar />
                <div class="header-content text-white bg-white text-center ">
                <div id="tourPackagesSlider" class="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#tourPackagesSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#tourPackagesSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#tourPackagesSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./../../assets/images/LahosIsland_headerBG.png")} class="d-block w-100" height="500" alt="Carousel Image" />
                        <div class="carousel-caption">
                        <h1 class="text-white">Lahos Island</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./../../assets/images/tourPackages1.png")} class="d-block w-100" height="500" alt="Carousel Image" />
                        <div class="carousel-caption">
                        <h1 class="text-white">Matukad Island</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require("./../../assets/images/tourPackages2.png")} class="d-block w-100" height="500" alt="Carousel Image" />
                        <div class="carousel-caption">
                        <h1 class="text-white">Cagbalinad Island</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            <section class="container lahosIsland_context">
                <p class="gilroy-medium fs-5 mb-5">
                Caramoan has been famous for being the site for several editions of the competitive reality TV 
                Show, SURVIVOR. Aside from that, Caramoan is also famous for its white sand beaches and rich 
                marine life. It’s the perfect place for a vacation! <br/>
                If you want some exciting Island getaway, then Caramoan Island Hopping Tour Package is for you. 
                We offer an ALL-IN hassle free adventure. We take care of your hotel accommodation, full board 
                meals, boat and land transfers in Caramoan. Less stress and all fun and adventure. What more 
                can you ask for?
                </p>
            </section>

            <section class="container navAndTabs">
                <div class="my-5">
                <nav class="nav nav-pills flex-column flex-sm-row mb-4">
                    <a href="#rates" class="flex-sm-fill text-sm-center nav-link active" aria-current="page" data-bs-toggle="tab">RATES</a>
                    <a href="#itinerary" class="flex-sm-fill text-sm-center nav-link" data-bs-toggle="tab">ITINERARY</a>
                    <a href="#notes" class="flex-sm-fill text-sm-center nav-link" data-bs-toggle="tab">NOTES</a>
                </nav>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="rates">
                    <table class="table table-stripped table-responsive">
                        <tbody>
                        <tr>
                            <th>No. Of Pax</th>
                            <th>Guijalo Port Pick Up</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>7,400 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>5,600 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5,200 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>4,900 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>4,500 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>4,200 PHP/per pax</td>
                        </tr>
                        <tr>
                            <td>8-12</td>
                            <td>3,900 PHP/per pax</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="tab-pane fade" id="itinerary">
                        <h5>INCLUSION</h5>
                        <ul class="ps-5">
                        <li>Roundtrip Land Transfers from Guijalo Port to Hotel and back to Guijalo Port</li>
                        <li>3 Days/2 Nights Hotel Accommodation at West Peninsula or similar Hotels (Airconditioned Standard Room, CATV, Bathroom with Hot and Cold Shower), Quad/Triple Sharing</li>
                        <li>Full Board Meals: 2 set Breakfast, 2 set Lunch, 2 set Dinner (variety of seafood, Bicol Dishes, dessert and drinks)</li>
                        <li>Roundtrip Land Transfers from Hotel to Bical Port to Hotel for Island Hopping</li>
                        <li>1 and ½ days Island Hopping Tour</li>
                        <li>1 Tour Guide for the Island Hopping Tour for 1 ½ days</li>
                        <li>Exclusive Use of Boat for Island Hopping for 1 ½ days</li>
                        <li>All Island Tour Entrance and Environmental Fees</li>
                        <li>Cottage Fees in Cotivas and Manlawi Islands</li>
                        <li>Complimentary use of the Hotel/Resort’s swimming pool and other facilities</li>
                        <li>Full Coordination</li>
                        </ul>
                        <h5>EXCLUSION</h5>
                        <ul class="ps-5">
                        <li>Ferryboat/Banca Charges from Sabang Port to Guijalo Port</li>
                        <li>Transfers from Naga City or Legazpi City</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="notes">
                    <ul class="ps-5">
                        <li>Rate is From Guijalo Port Caramoan</li>
                        <li>LAND TRANSFERS AROUND CARAMOAN FOR 2-3 PAX IS TRICYCLE; 4-12 PAX IS VAN valid till December 31, 2023</li>
                        <li>ALL Itinerary Island Hopping is subject to change due to weather condition or filming of Survivor.</li>
                        <li>Reservations shall only be confirmed upon deposit of 50% /payment of the total amount due. Deposits for 
                        confirmed reservations are NON-REFUNDABLE. However, NO-SHOW due to fortuitous events including, 
                        but not limited to, typhoons, earthquakes, floods, and other natural calamities, may be endorsed 
                        for reinstatement of reservation (subject to availability of rooms) or offsetting of accounts. 
                        Prevailing season rates shall apply for reinstated bookings.</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default CaramoanTour