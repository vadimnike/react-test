import React from 'react';
import Links from './Links';

const Header = (props) => {

    const navList = [
        {
            text: 'Home',
            url: '/home'
        },
        {
            text: 'Service',
            url: '/service'
        },
        {
            text: 'FAQ',
            url: '/faq'
        }
    ];

    return (
        <div className="top-header">
            <Links data={navList} />
        </div>
    );
};

export default Header;