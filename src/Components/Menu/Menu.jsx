import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

const Menu = ({ open }) => {

  //const isHidden = open ? true : false;
  //const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open}>
      <span>Menu</span>
      <p/>
      <Link to="/">
        Home
            </Link>
        <Link to="/login">
        Perfil
            </Link>
      <Link to="/login">
        Login
            </Link>
      <Link to="/register">
        Cadastrar
            </Link>
      <p/>
      <Link to="/sobre">
        Sobre nós
            </Link>
      <Link to="/contact">
        Contato
            </Link>

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 1rem;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  span {
    letter-spacing: 0.3rem;
    position: center;
    color: #FF2E63;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    display: block;
    padding: 15px;
    border: 0;
    border-top: 2px solid #FF2E63;
  }

  a {
    font-size: 1.5vw;
    text-transform: uppercase;
    padding: auto 0;
    margin-bottom: 30px;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryDark};
      background-color: ${({ theme }) => theme.primaryRed};
    }
  }
`;

export default Menu;