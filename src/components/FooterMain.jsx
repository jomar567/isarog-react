

const FooterMain = () => {
    return (
        // <!-- Footer Main -->
        <footer class="container-fluid pt-5 bg-dark text-white">
            <img src={require('../assets/images/Logo.png')} alt="Logo" class="m-auto d-block pb-4"/>
            <div class="container border-top pt-4">
            <div class="row">
                <div class="col-md-3 col-sm-12">
                <h5 class="text-yellow">Contact us</h5>
                <ul>
                    <li>
                    <i class="fa fa-map-marker fs-5 me-2 text-yellow" aria-hidden="true"></i>
                    San Jose, Camarines Sur
                    </li>
                    <li>
                    <i class="fa fa-phone fs-5 me-2 text-yellow" aria-hidden="true"></i>
                    (+63) 901 008 0987
                    </li>
                </ul>
                </div>
                <div class="col-md-3 col-sm-12">
                <h5 class="text-yellow">Customer Care</h5>
                <ul>
                    <li>
                    <a href="#">FAQs</a>
                    </li>
                    <li>
                    <a href="#">
                        How to Book Payment Method
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        Ask a Question
                    </a>
                    </li>
                </ul>
                </div>
                <div class="col-md-3 col-sm-12">
                <h5 class="text-yellow">Information</h5>
                <ul>
                    <li>
                    <a href="#">
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        Terms and Condition
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        Sitemap
                    </a>
                    </li>
                </ul>
                </div>
                <div class="col-md-3 col-sm-12">
                <h5 class="text-yellow">About</h5>
                <ul>
                    <li><strong>Isarog Adventure is the best travel agency with outstanding services.</strong></li>
                </ul>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col pt-4 text-center text-muted bg-white">
                <div class="row g-0 justify-content-md-center">
                <div class="col-md-auto">
                    <p class="gilroy-medium mb-0"><small>Copyright©2022 Isarog Adventure.</small></p>
                </div>
                <div class="col-md-auto px-2">
                    <p class="gilroy-medium"><small>All Rights Reserved</small></p>
                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default FooterMain