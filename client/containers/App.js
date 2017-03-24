import React from 'react';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Course Cards</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
