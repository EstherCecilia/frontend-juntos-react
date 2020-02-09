import React from 'react';
import styled from 'styled-components';

const Image = () => {
    return(
        <Div>
            <ImgGoogle src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" 
                    alt="googlePlay"></ImgGoogle>
            <ImgApple src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="appStore"></ImgApple>
        </Div>
    );
}

const Div = styled.div`
    margin-bottom: 12vw;
`;

const ImgApple = styled.img`

    @media screen and (min-width: 601px) {
        width: 10.5vw;
        margin-bottom: 0.75vw;
    }

    @media screen and (max-width: 600px) {

    }

    @media only screen and (min-width: 1400px) {
        width: 9.5vw;
        margin-bottom: 0.75vw;
    }
`;

const ImgGoogle = styled.img`
    @media screen and (min-width: 601px) {
        width: 13vw;
    }

    @media screen and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 1400px) {
        width: 12vw;
    }
`;

export default Image;