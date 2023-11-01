import React from "react"
import Header from "../../components/header/header";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../../components/footer/footer";
import Experience from "../experience/experience";
import Portfolio from "../portfolio/portfolio";
import Socials from "../../components/header/socials";

const HomePage = () => {
    return (
        <>
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;