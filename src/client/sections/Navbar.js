import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-line-pack: center;
  align-content: center;
  padding: 0 0.5em;
  height: auto;
  background-color: PaleGoldenRod;
  transition: background 300ms ease-out;
  color: black;
  `
const Navlist = styled.ul`
  list-style-type: none;
  text-align: right;
  font-size: 1.3em;
  display: inline-block;
    li {
      display: inline-block;
      padding: 0 0.5em;
    }
`
const zoomIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const Logo = styled.h1`
    font-size: 1.3em;
    padding: 0.2em;
    display: inline-block;
    animation: ${zoomIn} 1s linear 1;
`

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <a onClick={() => scroll.scrollToTop()}>
          <Logo>&lt; 😩👌 &gt;</Logo>
        </a>
        <Navlist>
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
        </Navlist>
      </Wrapper>
    )
  }
}

export default Navbar;