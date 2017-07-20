import React, {Component} from 'react';
import Links from './Links';
import ProfileLog from './ProfileLog';

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
            <ProfileLog key={ProfileLog} />
        </div>
    );
};

export default Header;