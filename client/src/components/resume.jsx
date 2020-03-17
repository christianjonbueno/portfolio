import React from 'react';

export default function Resume () {
  return(
    <div>
      <div className="row greySpace"></div>
      <div className="row">
        <div className="container resumeTitle">
          <p className="resumeName font-weight-light">CHRISTIAN BUENO</p>
          <h4 className="jobTitle">{`< SOFTWARE `}</h4>&nbsp;&nbsp;&nbsp;<h4 className="jobTitle">{` ENGINEER >`}</h4>
        </div>
      </div>
      <div className="row belowTitle"></div>
      <div className="container">
        <div className="row">
          <div className="col-3 leftSide">
            <div className="container">
              <div className="row">
                <h4 className="jobTitle">{`< C O N T A C T >`}</h4>
                <hr className="resumeHr"/>
                <p>+1 626 483 3555</p>
                <p>christianjonbueno@me.com</p>
                <p>Los Angeles (CA)</p>
                <p>linkedin.com/in/christianjonbueno</p>
                <p>github.com/christianjonbueno</p>
              </div>
            </div>
          </div>
          <div className="col-9">Ho</div>
        </div>
      </div>
    </div>
  );
};