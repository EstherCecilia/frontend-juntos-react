import React from "react";

import { storiesOf } from "@storybook/react";

import { faEraser } from "@fortawesome/free-solid-svg-icons";

import Button from "./";

storiesOf("atons/Button", module).add("Normal", () => (
    <Button
        icon={faEraser}
        title="Button Example"
        tooltip="Button Example Tooltip"
    />
));
