import React from 'react';

const Footer = ({ length }) => {
    return (
        <footer>
            {length-2} {length === 1 ? "item" : "items"} left
        </footer>
    );
};

export default Footer;
