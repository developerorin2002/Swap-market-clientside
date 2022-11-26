import React, { useContext } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import car from '../../Assets/Logo/car.png';
import { FaSignOutAlt } from 'react-icons/fa';
import './Header.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut =() =>{
        logOut()
        .then(res=>{
            toast.success('Log Out Successfully')
        })
        .catch(err=>{
            toast.error(`${err}`)
        })
    }
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
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            
                            {
                                user?.email && user?.uid && <Link to='/dashboard'>Dashboard</Link>
                            }
                            <div className='user-profile d-flex align-items-center'>
                                <div className="avatar">
                                    {
                                        user?.email && user?.uid && <img src={user.photoURL} alt="" />
                                    }
                                </div>
                               {
                                user?.email && user.uid &&  <button onClick={handleLogOut} className='logout-btn'>Logout <span className='mx-2'><FaSignOutAlt/></span> </button>
                               }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;