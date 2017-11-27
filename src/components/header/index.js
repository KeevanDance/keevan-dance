import React from 'react';

import './_header.scss';

const Header = () =>(
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <span className="header-logo">
                    <a className="header-nav-link" href="https://github.com/KeevanDance">GitHub</a>
                  </span>
                </li>
                <li className="header-nav-list-item">
                  <span className="header-logo">
                    <a className="header-nav-link" href="https://www.dropbox.com/s/wi1p8etqdwjcjfo/Resume.pdf?dl=0">Resume</a>
                  </span>
                </li>
                <li className="header-nav-list-item">
                <span className="header-logo">
                  <a className="nav-link" href="https://www.facebook.com/keevan.dance.9">Facebook</a>
                </span>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
