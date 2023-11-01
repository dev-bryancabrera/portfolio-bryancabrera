import React from "react"
import Socials from "./socials";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <article>
                    <div className="header-img">
                        <figure>
                            <img src="/../src/assets/img/foto.jpg" alt="Bc" />
                        </figure>
                    </div>
                    <div className="header-info">
                        <h5>Hi I'm</h5>
                        <h1>Bryan Cabrera</h1>
                        <h4>FullStack Developer</h4>
                    </div>
                    <div className="btn-info">
                        <button>Download CV</button>
                        <button>Contact Info</button>
                    </div>
                </article>
                <Socials />
            </div>
        </header>
    )
}

export default Header;