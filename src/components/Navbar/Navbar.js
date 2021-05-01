import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle/Toggle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  };

  render() {
    const { isDarkMode, onChangeToggle } = this.props;

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
              <Toggle isDarkMode={isDarkMode} onChangeToggle={onChangeToggle} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func
};

Navbar.defaultProps = {
  onChangeToggle: () => {}
};

export default Navbar;
