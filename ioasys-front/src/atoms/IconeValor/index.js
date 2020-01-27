import React from "react";

import IconeAvatar from "../IconeAvatar";

import { ContentStyled, ContentTypography } from "./style";

export default function IconeValor({ icon, cor, valor, tipo, texto, onClick }) {
    function handleClick() {
        onClick && onClick({ tipo, valor, texto });
    }

    return (
        <ContentStyled onClick={handleClick} action={onClick}>
            <div className="d-flex">
                <IconeAvatar
                    icon={icon}
                    cor={valor == 0 ? "#ccc" : cor ? cor : "#ccc"}
                    hover={onClick}
                />

                <div className="d-flex flex-column justify-content-center ml-3 ">
                    {valor && (
                        <ContentTypography variant="body2">
                            {valor}
                        </ContentTypography>
                    )}
                    {texto && (
                        <ContentTypography variant="caption">
                            {texto}
                        </ContentTypography>
                    )}
                </div>
            </div>
        </ContentStyled>
    );
}
