import { Fragment } from "react";
import Menu from "./components/Menu/Menu";

function Project() {
    return (
        <Fragment>
            <div>
                <Menu/> 
            </div>
            <div className="project-container">
            <h1>Projects</h1>
                <a href="https://github.com/coidng21/movie-website.git" className="project-box">
                    <img src={require("./style/images/project-02.jpeg")} alt="project img"></img>
                    <div className="project-text">
                        <h2>HJ.Movie - Movie Website</h2>
                        <p>This is a movie website where the users can view overview of the recently released movies, 
                            write comments about the movies and like the movies. The project uses TMDB, postgresql, 
                            and docker as a database, nodejs as backend, and react as frontend. This website 
                            also includes authentication process. Only authenticated users 
                            (registered and logged in users) can write comments and like the movies. 
                            This website is particularly useful for people who want to have up-to-date movie information 
                            and its review from the others.
                        </p>
                        <span>#React</span>
                        <span>#HTML</span>
                        <span>#CSS</span>
                        <span>#Javascript</span>
                        <span>#Nodejs</span>
                        <span>#TypeScript</span>
                        <span>#RestfulAPIs</span>
                        <span>#CRUD</span>
                        <span>#Docker</span>
                        <span>#Postgresql</span>
                    </div>
                </a>
                <a href="https://github.com/coidng21/ticketing-website.git" className="project-box">
                    <img src={require("./style/images/project-01.jpeg")} alt="project img"></img>
                    <div className="project-text">
                        <h2>DREAM CONCERT 2023 - Ticketing Website</h2>
                        <p>This is a Ticketing Website that uses React as Frontend and Nodejs as backend. 
                            It has reservation ticket website that requires users to enter their name, email, and phone number.
                            On the reservation site, there is a timer that was set to end on May 23, 2023 (ticketing end date). 
                            If the users successfully reserve a ticket, they are scheduled to get a ticket payment details starting from April 23, 2023
                            and would be directed to reservation successful page. The user information would be stored in MongoDB 
                            with their password encrypted.
                        </p>
                        <span>#React</span>
                        <span>#HTML</span>
                        <span>#CSS</span>
                        <span>#Javascript</span>
                        <span>#Nodejs</span>
                        <span>#MongoDB</span>
                        <span>#RestfulAPIs</span>
                    </div>
                </a>
                <a href="https://github.com/coidng21/portfolio.git" className="project-box">
                    <img src={require("./style/images/project-00.png")} alt="project img"></img>
                    <div className="project-text">
                        <h2>Portfolio</h2>
                        <p>The website has 4 main components: main page, about me page, 
                            projects page, and contact page. It is mainly built to introduce myself 
                            and projects I have done. It is built with React, javascript, html, and css.
                        </p>
                        <span>#React</span>
                        <span>#HTML</span>
                        <span>#CSS</span>
                        <span>#Javascript</span>
                    </div>
                </a>
            </div>
        </Fragment>
    )
}

export default Project;
