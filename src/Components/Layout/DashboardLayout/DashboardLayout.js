import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseAdmin from '../../Pages/Utilities/UseAdmin/UseAdmin';
import UseBuyerHook from '../../Pages/Utilities/UseBuyer/UseBuyer';
import UseSeller from '../../Pages/Utilities/UseSeller/UseSeller';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './DashboardLayout.css'
const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = UseSeller(user?.email);
    const [isAdmin] = UseAdmin(user?.email);
    const [isBuyer] = UseBuyerHook(user?.email);
    console.log(user?.email)
    console.log(isBuyer);
    console.log(isSeller)
    console.log(isAdmin)
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className='dashboard-nav py-5 text-center'>
                            {
                                isSeller && <Link to="/dashboard/addproduct">Addproduct</Link>
                            }
                            {
                                isBuyer && <Link to="/dashboard/myorder">myorder</Link>
                            }
                            {
                                isAdmin && <Link to="/dashboard/allseller">All Seller</Link>
                            }
                            {
                                isAdmin && <Link to="/dashboard/allbuyer">All Buyer</Link>
                            }
                            {
                                isSeller && <Link to="/dashboard/myproduct">My Product</Link>
                            }
                            {
                                isAdmin && <Link to="/dashboard/reported">Reported Items</Link>
                            }
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