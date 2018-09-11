import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
import styled from 'styled-components';

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
  font-size: 1rem;
  font-weight: 500;
  background-color: PaleGoldenRod;
  transition: background 300ms ease-out;
  color: black;
  `
  const Navlist = styled.ul`
    list-style-type: none;
    text-align: right;
    display: inline-block;
    margin: 1em 0;
      li {
        display: inline-block;
        padding: 0 0.5em;
      }
  `


class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <a onClick={() => scroll.scrollToTop()}>
          <h1 id="logo">Logo Can Go Here</h1>
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