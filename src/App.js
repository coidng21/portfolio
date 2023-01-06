import { Link } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div>
        <Menu/>
      </div>
      <div className="container">
        <div className="body-container">
          <div className="image">
          <img src={require("./style/images/image-01.jpg")} alt="my-emoticon" />
          </div>
          <a href="/AboutMe" className="short-bio">
            <p id="hi">Hi 👋 &nbsp; I'm</p>
            <h1>Hai Jin</h1>
            <div className="description">
              <p>
                🎓 Sophomore Studying in NUS Business Analytics <br />
                👩‍💻 Software Engineer in NUS Fintech Society
              </p>
              <div className="project-button">
                <a href="/Projects">View Projects</a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
