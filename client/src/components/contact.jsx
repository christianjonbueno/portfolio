import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import FadeIn from 'react-fade-in';
import ReactTypingEffect from 'react-typing-effect';

export default function Contact () {

  useEffect(() => {}, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState(["Have a question?","Say hi"]);
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    var content = {name, email, subject, message}
    Axios.post(`/home/`, content)
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccessMessage("Your email has been sent");
        setTimeout(() => {
          setSuccessMessage("")
        }, 3000)
      })
  }
  return(
    <FadeIn>
    <div className="container">
      <div className="row d-flex justify-content-center contactTitle">
        <FadeIn>
        <div className="container typeWriterContainer">
          <h1 className="bracket display-5">{`<`}</h1>
          <ReactTypingEffect
            text={text}
            speed= "100"
            eraseDelay= "900"
            typingDelay= "200"
            className="typeWriterContact"
          />
          <h1 className="bracket display-5">{`>`}</h1>
        </div>
        </FadeIn>
      </div>
      <div className="row">
        <div className="container">
          <form onSubmit={e => submitForm(e)} id="emailForm">
            <div className="form-group contactForm">
              <div className="row">
                <div className="col">
                  <input type="text" name="name" className="form-control" placeholder={`First & Last Name`} required value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-6">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required value={subject} onChange={e => setSubject(e.target.value)} />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <textarea rows="10"type="text" name="message" className="form-control" placeholder="Message" required value={message} onChange={e => setMessage(e.target.value)} />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <button type="submit" className="contactBtn">Submit</button> &nbsp; <span className="success">{successMessage}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </FadeIn>
  );
};