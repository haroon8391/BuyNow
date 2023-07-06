import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

export default function Navbar() {

    const state = useSelector((state) => state.handleCart);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3 fw-bold fs-4" to="/">BuyNow</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active fw-bold" to="/Products">Product</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active fw-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active fw-bold" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link type="button" to="/login" className="btn btn-outline-dark" data-bs-toggle="modal"
                                data-bs-target="#LoginModal"><i className="fa fa-sign-in me-1"></i>Login</Link>
                            <Link type="button" to="/register" className="btn btn-outline-dark mx-2" data-bs-toggle="modal"
                                data-bs-target="#signupModal"><i className="fa fa-user-plus me-1"></i>Register</Link>
                            <Link to="/cart" className='btn btn-outline-dark'><i className="fa fa-shopping-cart me-1"></i>
                                Cart ({state.cartItems.length})</Link>
                        </div>
                        <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="LoginModalLabel">Login to BuyNow</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3 row">
                                            <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">Email</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="staticEmail1" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <form>
                                                    <input type="password" className="form-control" id="inputPassword1" autoComplete="new-password" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-dark">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SIGNUP MODAL */}
                        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="signupModalLabel">Sign Up on BuyNow</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3 row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="staticEmail2" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="staticEmail3" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <form>
                                                    <input type="password" className="form-control" id="inputPassword2" autoComplete="new-password" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                            <br />
                                            <div className="col-sm-10">
                                                <form>
                                                    <input type="password" className="form-control" id="cinputPassword" autoComplete="new-password" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-dark">Create Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}