import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseSeller from '../../Pages/Utilities/UseSeller/UseSeller';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './DashboardLayout.css'
const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isSeller] = UseSeller(user?.email);
    console.log(user?.email)
    console.log(isSeller)
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className='dashboard-nav py-5 text-center'>
                       {
                        isSeller &&  <Link to="/dashboard/addproduct">Addproduct</Link>
                       }
                        <Link to="/dashboard/myorder">myorder</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;