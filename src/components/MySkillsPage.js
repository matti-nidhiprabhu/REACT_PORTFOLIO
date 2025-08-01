import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>

        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <Main>
          <Title>
            <Develope width={40} height={30} /> Frontend Developer
          </Title>
          <Description>
            I build responsive, modular, and maintainable web applications using modern frontend technologies.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind, Styled-Components, Framer Motion
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              VS Code, GitHub, Streamlit.
            </p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Tech Projects & Research
          </Title>
          <Description>
            I work on IoT-based systems and apply ML/DL methods for real-time fault detection in Wireless Sensor Networks.
          </Description>
          <Description>
            <strong>Domains</strong>
            <ul>
              <li>Wireless Sensor Networks (WSN)</li>
              <li>IoT & Smart Devices</li>
              <li>Machine / Deep Learning</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools & Frameworks</strong>
            <ul>
              <li>Python, Arduino, NS-3, Jupyter Notebook</li>
              
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />

      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage
