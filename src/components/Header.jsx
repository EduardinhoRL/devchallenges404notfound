import React from 'react';
import styled from 'styled-components'

const Encabezado = styled.header`
    padding-top: 20px;
    font-weight: 700;
`

const Header = () => {
    return ( 
        <Encabezado>
            404 NOT FOUND
        </Encabezado>
     );
}
 
export default Header;