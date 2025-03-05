import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
