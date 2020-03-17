import React from 'react';
import Axios from 'axios';
import Navbar from './navbar.jsx';
import Main from './main.jsx';
import Projects from './projects.jsx';
import Resume from './resume.jsx';
import Contact from './contact.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Router>
        <div>
          <Navbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </div>
      </Router>
    );
  };
};