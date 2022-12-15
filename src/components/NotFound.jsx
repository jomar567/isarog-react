import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <section>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center m-auto notFoundPage">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className='gilroy-heavy'>Are you Lost Baby Boy?</h1>
                        <h5>We can't find the page you're looking for.</h5>
                        <h5>Wanna go home?</h5>
                        <NavLink activeClassName="active" to="/">
                            <button type="button" class="btn border border-2 border-primary btn-lg mt-4">Take Me Home😭</button>
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={require('../assets/images/404.png')}  width={400} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound