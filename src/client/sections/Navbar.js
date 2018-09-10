import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class Navbar extends Component {
  render() {
    return (
      <nav className="nav nav-sticky">
        <a onClick={() => scroll.scrollToTop()}>
          <h1 id="logo">Logo Can Go Here</h1>
        </a>
        <ul className="nav-list">
          <li><Link
            activeClass="active"
            to="header-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span>A Section</span>
          </Link></li>
          <li><Link
            activeClass="active"
            to="body-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span>Another Section</span>
          </Link></li>
          <li><Link
            activeClass="active"
            to="footer-element"
            spy={true}
            smooth={true}
            duration={400}
            offset={0}>
            <span>The Footer</span>
          </Link></li>
        </ul>
      </nav>

    )
  }
}

export default Navbar;