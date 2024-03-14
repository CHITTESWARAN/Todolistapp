import React from 'react';

const Footer = ({ length }) => {
    return (
        <footer>
            {length} {length === 1 ? "item" : "items"} left
        </footer>
    );
};

export default Footer;
