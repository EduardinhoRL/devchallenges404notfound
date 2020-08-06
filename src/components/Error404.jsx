import React from 'react'
import Img404 from '../img/Scarecrow.png'
import styled from 'styled-components'

const ContainerError = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

@media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
}

div { 
    align-items: center;
    display: flex;
    justify-content: center; 
    padding: 30px;
}`

const Left = styled.div`
    

img {
    width: 100%; 
}`

const Right = styled.div`
    flex-direction: column;

div {
    display: grid;
    grid-gap: 40px;
}

h2 {
    font-size: 50px; 
    margin: 0;
    font-family: 'Sora', sans-serif;
    max-width: 460px; 
}

p {
    font-family: 'Sora', sans-serif;
    max-width: 290px; 
    margin: 0;
    letter-spacing: 2px;
    line-height: 30px;
    font-size: 18px;
}`

const Button = styled.button`
    background: #1b1b1b;
    color: #fff;
    padding: 20px 10px;
    text-transform: uppercase;
    cursor: pointer;
    width: 200px;
    font-size: 12px;
    border: none;
    outline: none;
`

const Error404 = () => {
    return ( 
        <ContainerError>
            <Left>
                <img src={Img404} alt=""/>
            </Left>

            <Right>
                <div>
                    <h2>I have bad news for you</h2>
                    <p>The page you are looking for might be removed or is temporarily unavalable</p>
                    <Button>
                        Back to the homepage
                    </Button>
                </div>
            </Right>
        </ContainerError>
     );
}
 
export default Error404;