import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const Element = Scroll.Element;

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.header `
  background: papayawhip;
  padding: 20vh;
  margin: 0 auto;
`;

class Header extends Component {
  render() {
    return (
      <Element name="header-element">
    <Wrapper>
  
    <Title>
      Here's a cool header or something!
    </Title>
  
      </Wrapper>
      </Element>
    );
  }
}

export default Header;
