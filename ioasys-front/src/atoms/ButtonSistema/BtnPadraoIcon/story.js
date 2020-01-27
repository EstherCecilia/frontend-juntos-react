import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BtnPadraoIcon from "./index";
import {
    faChevronCircleDown,
    faEraser
} from "@fortawesome/free-solid-svg-icons";

storiesOf("atons/ButtonSistema/BtnPadraoIcon", module).add("Normal", () => (
    <BtnPadraoIcon
        icon={faEraser}
        texto={"StoryBook"}
        title={"Teste StoryBook"}
    />
));
