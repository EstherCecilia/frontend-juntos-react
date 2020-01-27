import React from "react";

import { ChipStyled } from "./style";
import IconeAvatar from "../IconeAvatar";

export default function ChipValor({ icon, cor, valor, tipo, texto, onClick }) {
    function handleClick() {
        onClick && onClick({ tipo, valor, texto });
    }

    return (
        <ChipStyled
            onClick={handleClick}
            hover={onClick}
            color={cor}
            avatar={
                <IconeAvatar
                    icon={icon}
                    cor={valor === 0 ? "#cecece" : cor ? cor : "#ccc"}
                    hover={onClick}
                    size=""
                />
            }
            label={`${texto} ${valor ? " - " + valor : ""}`}
        />
    );
}
