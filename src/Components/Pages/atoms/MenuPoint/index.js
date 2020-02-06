import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import MoreVertIcon from "@material-ui/icons/MoreVert";
export default function MenuPopupState(user) {
  const handleClick = () => {
    console.log(user);
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            {...bindTrigger(popupState)}
            style={{ marginLeft: "95%" }}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => handleClick()}>Logout</MenuItem>
            <MenuItem onClick={() => handleClick()}>Edit</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
