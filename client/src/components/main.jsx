import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import FadeIn from 'react-fade-in';
import ReactPlayer from 'react-player'

export default function Main () {

  useEffect(() => {}, []);

  const [text, setText] = useState(["Hello World","I'm Christian"]);

  return(
    <div>
      <FadeIn>
      <div className="row topPic">
        <div className="col-12">
          <img src="https://i.imgur.com/nrApU21.jpg" alt="me" className="mainPic"/>
        </div>
      </div>
      </FadeIn>
      <hr className="homeHr"/>
      <FadeIn>
      <div className="container typeWriterContainer">
        <h1 className="bracket display-5">{`<`}</h1>
        <ReactTypingEffect
          text={text}
          speed= "100"
          eraseDelay= "1200"
          typingDelay= "200"
          className="typeWriter"
        />
        <h1 className="bracket display-5">{`>`}</h1>
      </div>
      </FadeIn>
      <FadeIn>
      <div className="container video">
        <ReactPlayer url="https://www.youtube.com/watch?v=yf7QCU53ZMg" />
      </div>
      </FadeIn>
    </div>
  );
};