import React from 'react';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <div className="conatiner">
            <div className='row layout'>
                <div className='col-lg-4'>
                    <Navbar />
                </div>
                <div className='col-lg-8 d-flex'>
                    <main className="main">{children}</main> 
                </div>
            </div>   
        </div>
    );
}

export default Layout;
