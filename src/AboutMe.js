import { Fragment } from "react";
import {FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact} from "react-icons/fa";
import {DiMysql, DiPostgresql} from 'react-icons/di'
import Menu from "./components/Menu/Menu";
const AboutMe = () => {
    return (
        <Fragment>
            <div>
                <Menu/>
                <div className="container">
                    <div className="square">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div>
                            <h2>🎓 Education</h2> <br/>
                            <b>BSc NUS Business Analytics </b>
                            <p className="small">Honors (distinction) with CAP 4.09 </p>
                            <p className="date">08/2021 - Present</p> <br/>
                            <p>Business Analytics is a key area of infocomm technology (ICT) involving multiple disciplines. 
                                It enables businesses and organizations to use their wealth of data 
                                to gain invaluable insights, maximize competitive advantages and improve 
                                efficiency and effectiveness.</p>
                                <br/>
                            <h4>Relevant Course Works Taken</h4> <br/>
                            <p>CS1010S, CS2030, CS2040, BT1101, BT2102, BT2101, BT2103</p>
                        </div>
                    </div>
                    <div className="square">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div>
                            <h2>👩‍💻 Relevant Experiences</h2> <br/>
                            <b>NUS Fintech Society </b>
                            <p className="small">Software Enginner</p>
                            <p className="date">08/2022 - Present</p>
                            <p>Worked as backend developer in DAO project. Established prisma and created CRUD methods for user model.
                            Wrote methods to store wallet address in database.</p>
                            <br/>
                            <b>XRPL Campus Ambassador 2022</b>
                            <p classNa
                            me="small">Ripple Campus Ambassador</p>
                            <p className="date">08/2022 - 12/2022</p>
                            <p>Participated in workshops related to XRP Ledger development and got mentorship from Ripple developers.
                                Organized workshops in NUS to spread knowledge about blockchain development.
                            </p>
                        </div>
                    </div>
                    <div className="square">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div>
                            <h2>⚙️ Skill Sets I Have</h2> <br/>
                            <b>Hard Skills</b> <br/>
                            <p>Proficient in</p>
                                <FaJava style={{fontSize:'2em'}}/>
                                <FaPython style={{fontSize:'2em'}}/>
                                <FaHtml5 style={{fontSize:'2em'}}/>
                                <FaCss3Alt style={{fontSize:'2em'}}/>
                                <FaReact style={{fontSize:'2em'}}/>
                                <FaNodeJs style={{fontSize:'2em'}}/>
                                <DiPostgresql style={{fontSize:'2em'}}/>
                                <DiMysql style={{fontSize:'2em'}}/>
                            <br/> <br/>
                            <b>Soft Skills</b> <br/>
                            <p>Teamwork, communication, critical thinking, time management, adaptability</p>
                            <br/>
                            <b>Language</b> <br/>
                            <p>English - Proficient <br/>
                               Korean - Native <br/>
                               Chinese - Proficient
                            </p>
                            <br/>
                            <b>Hobbies</b> <br/>
                            <p>🎨 Drawing</p> 
                            <p>✈️ Traveling</p>
                            <p>🏃‍♀️ Workout</p>
                            <a href="https://blog.naver.com/dorothy_1225">😃 My Korean Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;