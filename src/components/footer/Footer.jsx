import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    // Define sample social media links
    const socialMediaLinks = {
        facebook: "https://x.com/ShivangRGaur?t=3UNvEwTFijc6qdlZuuEWaA&s=09",
        instagram: "https://www.instagram.com/ahamshivang?utm_source=qr&igsh=MWdtZ280ZTIxb3o5bw==",
        twitter: "https://x.com/ShivangRGaur?t=3UNvEwTFijc6qdlZuuEWaA&s=09",
        linkedin: "https://www.linkedin.com/in/shivang-gaur-b088b7195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    {/* Your existing info text */}
                </div>
                <div className="socialIcons">
                    {/* Add onClick handlers to open social media links */}
                    <span className="icon" onClick={() => window.open(socialMediaLinks.facebook, "_blank")}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={() => window.open(socialMediaLinks.instagram, "_blank")}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={() => window.open(socialMediaLinks.twitter, "_blank")}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={() => window.open(socialMediaLinks.linkedin, "_blank")}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
