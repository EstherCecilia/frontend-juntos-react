import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export default function MenuPopupState(user) {
  const handleClick = () => {
    localStorage.setItem("token", null);
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
            <MenuItem>
              <Link to="/editar">
                <span style={{fontFamily: 'Nunito Sans'}}>Editar</span>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleClick()}>
              <Link to="/login">
                <span style={{fontFamily: 'Nunito Sans'}}>Logout</span>
              </Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
