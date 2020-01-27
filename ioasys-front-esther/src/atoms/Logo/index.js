import React from "react";

import { logoWeb } from "components/Logo";
import { ImgContentStyled } from "./style";

const Logo = () => {
    return (
        <div
            className="logo d-flex col-12 col-sm-4
				align-items-center align-self-center
				justify-content-center justify-content-sm-start"
        >
            <ImgContentStyled alt="..." src={logoWeb} className="img-fluid" />
        </div>
    );
};

export default Logo;
