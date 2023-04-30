import React from 'react';
import banner from './img/banner.jpeg'
import styled from 'styled-components';

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
  background-color: black;
  padding: 20px;
  marging: 20px;
  bottom: 0;
`;



const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
  border: 1px solid gold;
  padding: 8px 16px;
  margin-left: 8px;
`;

const Upper = styled.div`
background: black;
`

const P = styled.p`
color: white;
font-size: 20px
`

function App() {
  return (
    <>
      <Navbar>
            <Container>
              <a href="https://booksy.com/en-us/dl/show-business/979127">
                <Button>Book</Button>
              </a>
            </Container>
      </Navbar>

          <Upper>
            <Banner src={banner} alt="Kari"/>
           <h1>Bio</h1>
            <P>I began my archery practice in 2012 in Los Angeles, CA. A wonderful group of passionate archers ran a free program to introduce archery to the community. It did not take long before I became a regular. When I moved to the Bay Area, I knew I had to take archery with me.</P>
            <P>Archery is less a sport to me and more a practice. I use archery to clear and steady my mind, to check in with my posture and my focus. It can be an excellent remedy to a bad day or a perfect morning start.</P>
            <P>The Bay Area has a fantastic archery community with many opportunities to learn and practice as well as compete for those who are interested.</P>
          </Upper>
       
            <h1>Individual Lessons and Corporate Events</h1>
            <p>Whether you have always wished to learn archery, think it might be a fun experience or want to have a team building event, I offer Private Lessons and Group Events at Ohlone Archery, San Leandro, CA.</p>
            <h3>Events can accommodate up to 24 participants.</h3>
            <h3>All participants must be 14 years of age or older.</h3>
      

      <Footer>
        <div>
          <a href="mailto:napoli.kari@gmail.com" style={{color: 'gold'}}>email: napoli.kari@gmail.com</a>
            <a href="tel:+13109231915"><p style={{color: 'gold'}}>Phone: 310-923-1915</p></a>
        </div>
      </Footer>
    </>
  );
}

export default App;
