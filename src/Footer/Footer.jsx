import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="Footer_Content">
                <p className="Footer_Text">
                    © {currentYear} Ujjjawal Tripathi. All rights reserved.
                </p>
                <p className="Footer_Subtext">
                    Built with ❤️ using React
                </p>
            </div>
        </footer>
    );
};

export default Footer; 