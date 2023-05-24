import React from "react";
import ReactDOM from "react-dom/client";

const Footer = ({ length }) => {
    return (
        <footer>
            <p>
                {" "}
                &#10031; {length} List {length > 1 ? `Items` : length === 0 ? `Items` : `item`}{" "}
                &#10031;
            </p>
        </footer>
    );
};

export default Footer;
