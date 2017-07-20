import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
    const { data } = props;

    return (
        <nav>
            {
                data.map(item => (
                    <Link
                        key={item.url}
                        to={item.url}
                    >
                        {item.text}
                    </Link>
                ))
            }
        </nav>
    );
};
export default Links;