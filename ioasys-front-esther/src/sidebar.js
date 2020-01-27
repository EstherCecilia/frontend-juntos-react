// sidebar.js

import React from "react";
import { slide as Menu } from "react-burger-menu";
import Login from "./Login";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href={Login}>
        MEU PERFIL
      </a>

      <a className="menu-item" href="/angular">
        SOBRE NÓS
      </a>

      <a className="menu-item" href="/react">
        ENTRE EM CONTATO
      </a>
    </Menu>
  );
};
