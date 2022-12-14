import NavigationBar from "../Navbar"

const TogaweResort = () => {
    return (
        <>
            <header className="togaweResort__header bg-dark mb-5">
                <NavigationBar />
            </header>
            <section class="container togaweResort_context">
                <div class="card border-0 image-gallery mb-5">
                    <div class="card-body p-4">
                        <h2>Tugawe Cove Resort</h2>
                        <span class="badge rounded-pill text-bg-primary py-2">Resort</span>
                        <span>
                        <i class="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                        <i class="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                        <i class="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                        <i class="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                        <i class="fa fa-star text-yellow mb-3" aria-hidden="true"></i>
                        </span>
                        <p class="text-muted"><i class="fa fa-map-marker text-muted mb-3" aria-hidden="true"></i>
                        Barangay Colongcogong, Caramoan Peninsula, Caramoan, Camarines Sur, Philippines, 4429
                        </p>
                        <hr/>

                        <div class="d-none d-md-block mb-4">
                        <div class="row">
                            <div class="col-md-10 col-sm-12">
                            <img src={require("./../../assets/images/TogaweCoveResort.png")} class="w-100 h-100" alt="Resort Image"/>
                            </div>
                            <div class="col-md-2 col-sm-12">
                            <div class="col">
                                <img src={require("./../../assets/images/StarMarkHotel.jpg")} class="w-100 h-100 py-4" alt="Resort Image"/>
                            </div>
                            <div class="col">
                                <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015530-1024x720-FIT_AND_TRIM-b7364f08c3447b198b776d8534fd23c6.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640" class="w-100 h-100 py-4" alt="Resort Image"/>
                            </div>
                            <div class="col">
                                <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015530-cbf7722cddf86608338cae91395e992e.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640" class="w-100 h-100 py-4" alt="Resort Image"/>
                            </div>
                            <div class="col">
                                <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10015530-340d3371231c391d6f4aa9021fa9d085.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640" class="w-100 h-100 py-4" alt="Resort Image"/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="map">
                        <h3>Location Info</h3>
                        <p class="text-muted"><i class="fa fa-map-marker text-muted mb-3" aria-hidden="true"></i>
                            Barangay Colongcogong, Caramoan Peninsula, Caramoan, Camarines Sur, Philippines, 4429
                        </p>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1564&amp;height=289&amp;hl=en&amp;q=Tugawe Cove Resort&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <a href="https://piratebay-proxys.com/">Piratebay</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="hotel-description">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                    <h3>Accomodation Policies</h3>
                    </div>
                    <div class="col-md-8 col-sm-12">
                    <p>Check-in/Check-out Time</p>
                    <p class="gilroy-medium">Check-in: <span class="gilroy-bold me-2">From 14:00
                    </span>Check-out: <span class="gilroy-bold">Before 12:00</span></p>
                    <hr/>
                    <p>Additional Policy</p>
                    <div class="gilroy-medium">
                        <p>Please contact hotel for Boat Transfer at least 3 days prior arrival </p>
                        <br/><br/>
                        <p class="mb-0">+639176507845</p>
                        <p class="mb-0">+639175016711</p>
                        <p class="mb-0">+632 -815 6632</p>
                        <p>Please be advised that the resort needs a medical certificate from your point 
                        origin and Health Declaration form provided by the resort. This is within the Bicol region. </p>
                    </div>
                    <hr/>
                    <p>General Check-in Instructions</p>
                    <p class="gilroy-medium">Please contact hotel for Boat Transfer at least 3 days prior arrival +639176507845 +639175016711 +632 -815 6632</p>
                    <p class="gilroy-medium">Please be advised that the resort needs a medical certificate from your point origin and Health Declaration form provided by the resort. This is within the Bicol region. </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4 col-sm-12">
                    <h3>Hotel Description</h3>
                    </div>
                    <div class="col-md-8 col-sm-12 lh-base">
                    <p class="gilroy-medium">Travelers looking to just disappear and relax should book a room at
                        the secluded Tugawe Cove Resort in Camarines Sur. Tucked away in a corner of Caramoan
                        Island, the resort has stylish rooms, a beautiful beach, and breathtaking views sure to 
                        make any vacation relaxing and memorable.</p>
                    <div class="row">
                        <div class="col-md-4 col-sm-12 gilroy-bold">
                        <p>Facilities</p>
                        </div>
                        <div class="col-md-8 col-sm-12 gilroy-medium">
                        <p>AC, Restaurant, Swimming Pool, 24-Hour Front Desk, Parking, WiFi</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-12 gilroy-bold">
                        <p>Operational Hours</p>
                        </div>
                        <div class="col-md-8 col-sm-12 gilroy-medium">
                        <p>From 14:00 - Before 12:00</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-12 gilroy-bold">
                        <p>Distance to Downtown</p>
                        </div>
                        <div class="col-md-8 col-sm-12 gilroy-medium">
                        <p>14.44 km</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-12 gilroy-bold">
                        <p>Popular Landmarks</p>
                        </div>
                        <div class="col-md-8 col-sm-12 gilroy-medium">
                        <p>Gota Beach, Virac Airport (VRC), Sabang Beach, Baras Catholic Parish Church</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <button type="button" class="btn btn-lg custom-btn__reversed d-block m-auto my-5">Book Now</button>
            </section>
        </>
    )
}

export default TogaweResort