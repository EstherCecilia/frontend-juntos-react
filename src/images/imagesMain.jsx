import React from 'react';
import styled from 'styled-components';

const Image = () => {
    return(
        <Div>
            <img src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" 
                    alt="googlePlay"
                    width="150px"></img>
            <ImgApple src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="appStore"
                    width="120px"></ImgApple>
        </Div>
    );
}

const Div = styled.div`
    margin-bottom: 12vw;
`;

const ImgApple = styled.img`
    margin-bottom: 9px;
`;

export default Image;