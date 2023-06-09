import React from "react";
import banner from "./img/banner.jpeg";
import styled from "styled-components";
import Accordion from "./Accordion";
import eba from "./img/eba.jpg";
import Target from "./img/Target.jpeg";

const Navbar = styled.nav`
  background-size: 50% auto;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding-top: 50px;
`;

const Logo = styled.img`
  display: block;
  width: 100px; /* Adjust the width as per your preference */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */
  margin-left: auto; /* Move the image to the right side */
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #16183b;
  padding: 40px;
  marging: 30px;
  bottom: 0;
`;

const Button = styled.button`
  background-color: #c42727;
  color: #53f4e6;
  font-size: 18px;
  border: 1px solid gold;
  padding: 15px 16px;
  margin-left: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 10px;

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
  background-color: #323670;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
`;

const Middle = styled.div`
  background-color: #a5d0cc;
  padding: 30px;
  margin: 35px;
  border-radius: 10px;
`;

const Upper = styled.div`
  background-color: #323670;
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
`;

const P = styled.p`
  color: white;
  font-size: 20px;
`;

const Back = styled.div`
  background-color: #0a0c26;
  // background-image: url(${Target});
  // background-size: cover;
  // background-position: center;
  // background-attachment: fixed;
`;

function App() {
  return (
    <Back>
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
        <p style={{ fontSize: "25px" }}>
          Whether you have always wished to learn archery, think it might be a
          fun experience or want to have a team building event, I offer{" "}
          <strong>Private Lessons</strong> and <strong>Group Events</strong> at{" "}
          <u>Ohlone Archery, San Leandro, CA</u>.
        </p>
      </Middle>

      <Lower>
        <h1 style={{ color: "#A5D0CC" }}>FAQ</h1>
        <Accordion />
      </Lower>

      <Footer>
        <div style={{ margin: "15px" }}>
          <a
            href="mailto:napoli.kari@gmail.com"
            style={{ color: "gold", fontSize: "30px" }}
          >
            email: napoli.kari@gmail.com
          </a>
          <a href="tel:+17075831707">
            <p style={{ color: "gold", fontSize: "20px" }}>
              Phone: 707-583-1707
            </p>
          </a>
          <div style={{ padding: "10px" }}>
            <a href="https://www.instagram.com/eastbayarchery/">
              <img
                src="./ig.jpg"
                alt="instagram logo"
                style={{ width: "50px" }}
              />
            </a>
          </div>
          <div style={{ padding: "10px", display: "flex" }}>
            <a href="https://www.youtube.com/@eastbayarcher123">
            <img
              style={{ width: "130px" }}
              src="./youtube.png"
              alt="youtube logo"
            />
            </a>
          </div>
        </div>
        <a href="https://eastbayarchery.simplybook.me">
          <Button>Book Event</Button>
        </a>
        <div>
          <Logo src={eba} alt="logo" />
        </div>
      </Footer>
    </Back>
  );
}

export default App;
