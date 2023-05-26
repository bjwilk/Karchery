import React from "react";
import banner from "./img/banner.jpeg";
import styled from "styled-components";
import Accordion from "./Accordion";

const Navbar = styled.nav`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding-top: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #222227;
  padding: 20px;
  marging: 20px;
  bottom: 0;
`;

const Button = styled.button`
  background-color: #ff2400;
  color: #53f4e6;
  font-size: 16px;
  border: 1px solid gold;
  padding: 8px 16px;
  margin-left: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #00ff00;
  }
`;

const Lower = styled.div`
  background-color: #a5d0cc;
  padding: 20px;
  margin: 20px;
`;

const Middle = styled.div`
  background-color: #a5d0cc;
  padding: 20px;
  margin: 20px;
`;

const Upper = styled.div`
  background-color: #222227;
  padding: 10px;
  margin: 5px;
`;

const P = styled.p`
  color: white;
  font-size: 20px;
`;

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <a href="https://eastbayarchery.simplybook.me">
            <Button>Book Event</Button>
          </a>
        </Container>
      </Navbar>

      <Upper>
        <Banner src={banner} alt="Kari" />
        <h1 style={{ color: "#A5D0CC", fontFamily: "Arial, sans-serif" }}>
          Bio
        </h1>
        <P>
          I began my archery practice in 2012 in Los Angeles, CA. A wonderful
          group of passionate archers ran a free program to introduce archery to
          the community. It did not take long before I became a regular. When I
          moved to the Bay Area, I knew I had to take archery with me.
        </P>
        <P>
          Archery is less a sport to me and more a practice. I use archery to
          clear and steady my mind, to check in with my posture and my focus. It
          can be an excellent remedy to a bad day or a perfect morning start.
        </P>
        <P>
          The Bay Area has a fantastic archery community with many opportunities
          to learn and practice as well as compete for those who are interested.
        </P>
      </Upper>

      <Middle>
        <h1>Individual Lessons and Corporate Events</h1>
        <p style={{ fontSize: "20px" }}>
          Whether you have always wished to learn archery, think it might be a
          fun experience or want to have a team building event, I offer Private
          Lessons and Group Events at <u>Ohlone Archery, San Leandro, CA</u>.
        </p>
        <ul>
          <li>
            <span>
              <strong>Events can accommodate up to 24 participants</strong>.
            </span>
          </li>
          <li>
            <span>
              <strong>All participants must be 14 years of age or older</strong>
              .
            </span>
          </li>
        </ul>
      </Middle>

      <Lower>
        <h1>FAQ</h1>
        <Accordion />
      </Lower>

      <Footer>
        <div>
          <a href="mailto:napoli.kari@gmail.com" style={{ color: "gold" }}>
            email: napoli.kari@gmail.com
          </a>
          <a href="tel:+17075831707">
            <p style={{ color: "gold" }}>Phone: 707-583-1707</p>
          </a>
        </div>
        <a href="https://eastbayarchery.simplybook.me">
          <Button>Book Event</Button>
        </a>
      </Footer>
    </>
  );
}

export default App;
