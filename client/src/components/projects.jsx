import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import Axios from 'axios';
import ReactTypingEffect from 'react-typing-effect';

export default function Projects () {
  useEffect(() => {
    getProjects();
  }, []);

  const [projects, setProjects] = useState([]);
  const [text, setText] = useState(["react.js","express.js","socket.io","PostgreSQL","mongoDB"]);

  const getProjects = () => {
    Axios.get('/home')
      .then(data => {
        console.log(data)
        setProjects(data.data)
      })
  };

  return(
    <div>
      <div className="container">
        <FadeIn>
        <div className="row topProjects">
        {projects.map((project) => (
          <div className="col-4">
            <a href={`#${project.title}`}>
              <img src={project.image} className="projectThumbnails"></img>
            </a>
          </div>
        ))}
        </div>
        </FadeIn>
      </div>
      <hr />
      <div className="container video">
      <h1 className="bracket display-4">{`<`}</h1>
      <ReactTypingEffect
          text={text}
          speed= "100"
          eraseDelay= "600"
          typingDelay= "200"
          className="typeWriter"
        />
      <h1 className="bracket display-4">{`>`}</h1>
      </div>
      {projects.map((project) => (
        <FadeIn>
        <div className="container projectContainer">
          <div className="projectTitle"><h2 className="display-7" id={project.title}>{project.title}</h2></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={project.image_2} alt="" className="projectPic"/>
              </div>
              <div className="col-12">
                <h4 className="text-muted">Tech: {project.tech.map((t) => {return <span>{t} </span>})}</h4>
                <ul className="projectDesc">
                  {project.description.map((d) =>{return <li className="descLi">{d}</li>})}
                </ul>
                <h4 className="text-muted">Visit App: </h4><a href={project.link}>{project.link}</a>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
        </FadeIn>
      ))}
    </div>
  );
};