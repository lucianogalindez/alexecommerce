import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide bgImage" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://www.netcom92.com/wp-content/uploads/2014/07/banner-sony.jpg" className="d-block w-100" alt="imagen1" height='250' style={{objectFit: 'cover'}} />
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                <img src="https://i0.wp.com/reliveandplay.com/wp-content/uploads/ps4-logo-banner.jpg" className="d-block w-100" alt="imagen1" height='250' style={{objectFit: 'cover'}} />
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                <img src="https://www.netcom92.com/wp-content/uploads/2014/07/banner-sony.jpg" className="d-block w-100" alt="imagen1" height='250' style={{objectFit: 'cover'}} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
