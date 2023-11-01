import React from "react"
import Socials from "../header/socials";

const Footer = () => {
    return (
        <footer>
            {/* Subtitle less important but necesary with some h1, h2... */}
            {/* Subtitle thats define about that speks in this section */}
            <section>
                <section>
                    <div className="logo-socials">
                        <a href="">Bryan Cabrera</a>
                        <Socials />
                    </div>
                </section>
                <section>
                    <div className="links">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Experience</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </div>
                </section>
                <section>
                    <span> © Bryan Cabrera. All rights reserved</span>
                </section>
            </section>
        </footer>
    );
}

export default Footer;