import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth)
    return (
        <div className="bg-header-color">
            <nav className="sm:h-20 flex justify-between items-center pr-[-20px]  sm:px-0  md:px-36 sm:container-fluid">
                <img src={logo} alt="" />

                <div className="text-slate-50 mx-5">
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>

                    {

                        user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>


                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;