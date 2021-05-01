import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  };

  render() {
    return (
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item brand-text" href="../index.html">
              Bulma Admin
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="admin.html">
                Home
              </a>
              <a className="navbar-item" href="admin.html">
                Orders
              </a>
              <a className="navbar-item" href="admin.html">
                Payments
              </a>
              <a className="navbar-item" href="admin.html">
                Exceptions
              </a>
              <a className="navbar-item" href="admin.html">
                Reports
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
