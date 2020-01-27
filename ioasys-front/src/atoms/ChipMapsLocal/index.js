import React from "react";

import Tooltip from "@material-ui/core/Tooltip";

import {
    faMapMarkerAlt,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import { ChipStyled, AvatarStyled, FontAwesomeIconStyled } from "./style";

const ChipMapsLocal = ({
    cod,
    nome,
    filho,
    tipo,
    texto,
    icon,
    onClick,
    backgroundColor,
    color
}) => {
    const handleClick = () => {
        onClick && onClick({ cod, nome, filho, tipo });
    };

    return (
        <Tooltip title={texto}>
            <ChipStyled
                avatar={
                    <AvatarStyled>
                        <FontAwesomeIconStyled
                            className="animated flipInX delay-3s"
                            icon={icon ? icon : faMapMarkerAlt}
                            size="1x"
                            color="#fff"
                        />
                    </AvatarStyled>
                }
                backgroundColor={backgroundColor}
                color={color}
                label={
                    <div>
                        {nome && nome.capitalize()}
                        {filho && (
                            <>
                                {
                                    <FontAwesomeIconStyled
                                        className="animated fadeIn delay-1s"
                                        icon={faArrowRight}
                                        size="sx"
                                    />
                                }
                                {filho}
                            </>
                        )}
                    </div>
                }
                onClick={handleClick}
            />
        </Tooltip>
    );
};

export default ChipMapsLocal;
