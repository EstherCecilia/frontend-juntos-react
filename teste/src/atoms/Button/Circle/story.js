import React from "react";

import { storiesOf } from "@storybook/react";

import { faEraser } from "@fortawesome/free-solid-svg-icons";

import ButtonCircle from "./";

storiesOf("atons/Button/Circle", module).add("Circle", () => (
    <ButtonCircle icon={faEraser} tooltip="Button Circle Example" />
));
