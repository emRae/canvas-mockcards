import React from 'react';
import Boards from '../components/Boards';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Course Cards</a>
            <ul id="primary-nav" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
        <div className="flex-container">
          <Boards />
        </div>
      </div>
    );
  }
}

export default App;
