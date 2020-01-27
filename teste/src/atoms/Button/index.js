import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { isEmpty } from "utils/array";

import { Container, Icon } from "./styles";

export default function Button({
    icon = faTimes,
    title = "Não informado",
    tooltip,
    color,
    menu = [],
    options = {},
    onClick,
    onSelect,
    children,
    ...props
}) {
    if (typeof color === "string") color = { primary: color };

    options = {
        menu: {
            selectable: false,
            initialValue: isEmpty(menu) ? null : menu[0],
            ...options.menu
        },
        ...options
    };

    if (
        !menu.some(
            element => element.value === options.menu.initialValue.value
        ) &&
        options.initialValue
    )
        menu = [options.initialValue, ...menu];

    const [selected, setSelected] = useState(options.menu.initialValue);
    const [anchorEl, setAnchorEl] = useState();

    function handleClick(event) {
        onClick && onClick(event);

        if (isEmpty(menu)) return;

        setAnchorEl(event.currentTarget);
    }

    function handleSelectValue({ element, index }) {
        setSelected(element);
        setAnchorEl(null);

        onSelect && onSelect({ element, index });
    }

    return (
        <>
            <Tooltip
                title={tooltip}
                disableHoverListener={tooltip ? false : true}
            >
                <Container colorObject={color} onClick={handleClick} {...props}>
                    <Icon>
                        <FontAwesomeIcon icon={icon} className="m-2" />
                    </Icon>

                    {children ? children : title}
                </Container>
            </Tooltip>

            <Menu
                id="button-menu"
                open={!!anchorEl}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                keepMounted
                onClose={() => setAnchorEl(null)}
                {...options.menu}
            >
                {!isEmpty(menu) &&
                    menu.map((element, index) => (
                        <MenuItem
                            key={index}
                            selected={
                                options.menu.selectable
                                    ? element.value === selected.value
                                    : false
                            }
                            onClick={() =>
                                handleSelectValue({
                                    element: element,
                                    index
                                })
                            }
                        >
                            {element.label}
                        </MenuItem>
                    ))}
            </Menu>
        </>
    );
}
