import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(event) {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <header className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <strong>University List</strong>
          </Link>
          <button className={this.state.active ? 'navbar-burger is-active': 'navbar-burger'} aria-label="menu" aria-expanded="false" onClick={this.toggleClass} >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <nav className={this.state.active ? 'navbar-menu is-active': 'navbar-menu'}>
          <ul className="navbar-end">
            <li className="navbar-item"><Link to="/">Home</Link></li>
            <li className="navbar-item"><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}