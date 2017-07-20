import React from 'react';

const Link = (props) => {
    const { text, url } = props;

    return (
        <a href={url}>{text}</a>
    );
};
export default Link;