import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import car from '../../Assets/Logo/car.png';
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
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/category'>Category</Link>
                            <Link to='/home'>Home</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;