import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

a {
    text-decoration: none;
    color: black;
}

`

const Footer = () => {
    return ( 
        <Foot>
            EduardoRL @ <a href="https://devchallenges.io/">DevChallenges.io</a>
        </Foot>
     );
}
 
export default Footer;