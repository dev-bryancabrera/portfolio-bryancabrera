import React from "react"

const About = () => {
    return (
        <section className="about">
            {/* Subtitle not important but necesary with some h1, h2... */}
            {/* Subtitle thats define about that speks in this section */}
            <h2>About Me</h2>
            <div className="about_container">
                <div className="about_me">
                    <div className="about_me_img">

                    </div>
                </div>
                <div className="about_content">
                    <div className="academic-info">
                        <div className="experience">
                            <h5>Experience</h5>
                            <span> &#62; 1 year</span>
                        </div>
                        <div className="education">
                            <h5>Education</h5>
                            <span>Bach. Ciencias Basicas</span><br />
                            <span>Tec. Desarrollo de Software</span>
                        </div>
                    </div>
                    <div className="about_bio">
                        <p>
                            Soy un desarrollador Fullstack, me emociona desarrollar sistemas web y tengo una sólida base de conocimientos en el campo del Desarrollo de Software,
                            lo que me ha permitido desarrollar habilidades y competencias relevantes, he adquirido conocimientos con frameworks como Angular y React y lenguajes como Java,
                            JavaScript, TypeScript, bases de datos con MySql, Postgres, entre otros, también he trabajado en entornos de desarrollo frontend y backend.
                        </p>
                        <p>Estoy constantemente buscando oportunidades para aprender y crecer profesionalmente. Me concentro en mantenerme al tanto de las últimas tendencias,
                            avances en mi campo y en ampliar mis conocimientos a través de cursos, capacitaciones y talleres.
                            <br />Soy una persona motivada y comprometida, dispuesta a asumir nuevos desafíos y aportar valor a través de mi trabajo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;