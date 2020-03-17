import React from 'react';
import Axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    Axios.get('/home/')
      .then(data => this.setState({
        projects: data.data
      }))
      .catch(err => console.error(err));
  };

  render() {
    return(
      <div>
        Hello from App
      </div>
    );
  };
};