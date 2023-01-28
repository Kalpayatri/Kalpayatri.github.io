import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import MyBio from "./Components/MyBio";
import ContactMe from "./Components/ContactMe";
import MyProjects from "./Components/MyProjects";
import javascript from './Components/Images/javascript.png'
import react from './Components/Images/react-js-icon.png'
import html from './Components/Images/html.png'
import css from './Components/Images/css-3.png'
import bootstrap from './Components/Images/bootstrap.png'
import nodejs from './Components/Images/node-js.png'
import mongodb from './Components/Images/mongodb.png'
import npm from './Components/Images/npm.png'
import git from './Components/Images/git.png'

const App=(props)=>{
  return(
    <div>
      <header>
        <div className="main_header">
          <div className="logo">
          <h2>KalpayatriMallick</h2>

          <div className="intro">
            <h2>Hi,</h2><br/>
            <h2>I'm Kalpayatri,</h2><br/>
            {/* <p>Aspiring MERN Stack Developer</p> */}
            <p>Despite having a civil engineering degree, I am interested in MERN stack development. Expertise in both the front end and the back end development.</p>
            </div>

          <nav>
        <a href="#aboutme" className="pic1">AboutMe</a>
        <a href="#mybio" className="pic1">MyBio</a>
        <a href="#contactme" className="pic1">ContactMe</a>
        <a href="#myprojects" className="pic1">MyProjects</a>

      <Route path="/aboutme" component={AboutMe} exact={true} ></Route>
      <Route path="/mybio" component={MyBio} ></Route>
      <Route path="/contactme" component={ContactMe} ></Route>
      <Route path="/myprojects" component={MyProjects} ></Route>
      </nav>

          </div>
          {/* <div className="menu_button">
            <button>Connect with me</button>

          </div> */}

        </div>

      </header>

      <div>
        <h2 className="text" id="mybio">My Bio</h2>
      </div>
      
      <div>

      <h3 className="topit"><h2 className="mern">MERN Stack Developer</h2>
      <h2 className="mern1"><p>I'm an aspirant MERN Stack developer based in Bangalore, India. I am well-versed in a variety of front-end and back-end languages, responsive frameworks, and database management systems. My goal is simple: to use my development and analytical skills to improve corporate performance as an engineer.</p><br/>
      <p>My core expertise is in JavaScript, React.js, Redux, HTML, CSS, Bootstrap, Material UI, Node.js, MongoDb, and Express.js.</p><br/>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kalpayatri-malliick-70659214b/"> <button className="btn_text" >View Full Profile</button> </a>
      </h2>
      </h3>

      <div>
        <h2 className="text1" id="aboutme">About Me</h2>
      </div>
      <h3 className="topit1">
      <div class="bg-image"></div>
      <div>
        <h2 className="text2" id="myprojects">My Projects</h2>
      </div>

      <h3 className="topit2">.</h3>
      <div class="bg-text2">
        {/* <p className="footer1">Kalpayatri Mallick</p><br/> */}
        <a href="mailto:khusbu.mallick@gmail.com" className="footer1" id="contactme">khusbu.mallick@gmail.com</a>
        </div>
      {/* <h3 className="topit3">.</h3> */}



      

<div class="bg-text">
  <h3 className="js">Front-End</h3>
  <h3 className="js">Language</h3><br/>
  <img src={javascript}  alt="pic"className="js"/><br/>
  <p className="js">JavaScript</p>
  
  <h3 className="markup">Markup / Styling</h3>
  <h3 className="markup1">Language</h3>
  <img src={html} alt="pic" className="html"/>
  <img src={css} alt="pic" className="react1"/>
  <p className="markup2">HTML</p>
  <p className="markup3">CSS</p>

  <h3 className="framework">CSS Framework</h3>
  <img src={bootstrap} alt="pic" className="bootstrap"/>
  <p className="bname">Bootstrap</p>

  <h3 className="backend">Backend Technolgy</h3>
  <img src={nodejs} alt="pic" className="node"/>
  <p className="nodejs">Node JS</p>

  <h3 className="database">Database</h3>
  <h3 className="manage">Management</h3>
  <img src={mongodb} alt="pic" className="mongo"/>
  <p className="mongodb">MongoDb (No SQL)</p>

   <h3 className="react2">JavaScript Framework</h3><br/>
  <img src={react} alt="pic" className="react"/><br/>
  <p className="react3">React JS</p>

  <h3 className="package">Package Manager</h3>
  <img src={npm} alt="pic" className="pack"/>
  <p className="pack1">npm</p>

  <h3 className="version">Version Control</h3>
  <img src={git} alt="pic" className="git"/>
  <p className="git1">G I T</p>


</div>
      </h3>
      </div>

      <div class="bg-text1">
        <h2>Expense App</h2><br/>
        <p>MERN Stack Dynamic Website</p><br/>
        <h3>Key Features</h3><br/>
        <ul>
          <li>Developing an application that has budget functionality,<br/>
            that helps users define a budget,add expenses and keep track of it. Using the MERN Stack.</li>

        </ul><br/>
        {/* <h3>Technolgy Used</h3><br/> */}
        <a target="_blank"  rel="noreferrer" href="https://github.com/Kalpayatri/Expense-app"> <button className="btn_text1" >Source Code</button> </a>
  </div>

  {/* <footer>
        <p>Kalpayatri Mallick<br/>
        <a href="mailto:khusbu.mallick@gmail.com">khusbu.mallick@gmail.com</a></p>
      </footer> */}


    </div>

    
  )
}

export default App