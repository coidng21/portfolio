import { Fragment } from "react";
import Menu from "./components/Menu/Menu";

function Contact() {
    return (
        <Fragment>
            <div>
                <Menu/> 
            </div>
            <hr/>
            <div className="contact">
                <h1>You Would NEVER Regret to Contact Me!</h1>
                <h2>☎️  Contact Info</h2>
                <h3>🏫 School Email: e0905369@u.nus.edu</h3>
                <h3>📧 Personal Email: haijin736@gmail.com</h3>
                <h3>📞 Phone Number: +65 84369674</h3>
                <h3>📆 Available to Work: May 1, 2023 ~ Aug 6, 2023</h3>
            </div>
        </Fragment>
    )
}

export default Contact;
