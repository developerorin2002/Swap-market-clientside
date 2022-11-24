import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import car from '../../Assets/Logo/car.png';
import { FaSignOutAlt } from 'react-icons/fa';
import avatar from '../../Assets/Logo/user.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand className="d-flex align-items-center">
                        
                        <img src={car} className="logo-car img-fluid" alt="" />
                        <h3 className='mb-0 mx-2 logo-text'>Swap Car</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mx-auto custom-nav align-items-center">
                            <Link to='/home'>Home</Link>
                            <Link to='/category'>Category</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            <Link to='/myorder'>My Order</Link>
                            <Link to='/addproduct'>Add A Product</Link>
                            <Link to='/allseller'>All seller</Link>
                            <Link to='/allbuyers'>All Buyers</Link>
                            <div className='user-profile d-flex align-items-center'>
                                <div className="avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <button className='logout-btn'>Logout <span className='mx-2'><FaSignOutAlt/></span> </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;