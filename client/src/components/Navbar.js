import React from 'react'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">

                <a className="navbar-brand" href="/">JB-STORE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav left-align-text">
                       
                        <a className="nav-link" href="#">Login</a>
                        <a className="nav-link disabled">
                        <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    )
}
