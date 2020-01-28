import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { FormStyle } from '../../GlobalStyle/formStyle';
import { Link } from 'react-router-dom';
import { theme } from '../../GlobalStyle/theme';
import BurgerMenu from './BurgerMenu';

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(e) {
        e.preventDefault();
        await onSubmit({
            email,
            password,
        });

        setEmail('');
        setPassword('');
    }
    
    return (
        <ThemeProvider theme={theme}>
        <FormStyle/>
        <BurgerMenu/>
        <StyledMainDiv>
            <form onSubmit={handleSignIn}>
            <strong>Login</strong>

            <StyledOtherDiv>
                <label>E-mail</label>
                <input 
                    type="String"
                    value={email}
                    placeholder="Digite seu email" 
                    onChange={e => setEmail(e.target.value)}
                    required>
                </input>
            </StyledOtherDiv>

            <StyledOtherDiv>
                <label>Senha</label>
                <input 
                    type="String" 
                    value={password}
                    placeholder="Digite sua senha"
                    onChange={e => setPassword(e.target.value)}
                    required>
                </input>
            </StyledOtherDiv>

            <button type="submit">Entrar</button>
            
            <StyledOtherDiv>
                <Link to="/">
                <p className="otherOptions">Esqueceu sua senha?</p>
                </Link>
                <Link to="/register">
                <p className="otherOptions">Cadastre-se</p>
                </Link>
            </StyledOtherDiv>
            </form>
        </StyledMainDiv>
        </ThemeProvider>
    );
}

const StyledMainDiv = styled.div`
    background-attachment: fixed;
    width: 320px;
    background: ${({ theme }) => theme.primaryGreen};
    border-radius: 2px;
    padding: 30px 20px;
    margin: 0 auto;

    strong {
        font-size: 20px;
        text-align: center;
        display: block;
        color: ${({ theme }) => theme.primaryRed};
    }

    form {
        margin-left: auto;
        margin-right: auto;
    }

    button[type=submit] {
        width: 100%;
        border: 0;
        margin-top: 30px;
        background: ${({theme}) => theme.primaryRed};
        border-radius: 2px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: bold;
        color: ${({theme}) => theme.primaryGreen};
        cursor: pointer;
        transition: background 0.5s;
    }
`;

const StyledOtherDiv = styled.div`
    margin-top: 20px;

    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: grey;
        border: 0;
        border-bottom: 1px solid ${({theme}) => theme.primaryDark};
    }

    label {
        color: #FF2E63;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }
`;

export default LoginForm;