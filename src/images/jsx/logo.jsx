import React from 'react';
import styled from 'styled-components';
import logoBranco from '../../images/logoBranco.png'
import logoPreto from '../../images/logoPreto.png'
import logoPretoEscrito from '../../images/logoPretoEscrito.png'

const Image = () => {
    return(
        <Div>
            <Logo src={logoPreto} alt="Logo"></Logo>
        </Div>
    );
}

const Div = styled.div`
    margin-bottom: 0.1vw;
    display: inline-block;
`;

const Logo = styled.img`
    @media screen and (min-width: 601px) {
        width: 12vw;
        height: 12vw;
        margin-bottom: -2.5vw;
        margin-left: -1vw;
    }

    @media screen and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 1400px) {
        width: 12vw;
        height: 12vw;
        margin-bottom: -2.5vw;
        margin-left: -1vw;
    }
`;

export default Image;