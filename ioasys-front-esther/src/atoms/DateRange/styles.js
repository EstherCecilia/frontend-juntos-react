import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 400px;

    ${({ border }) =>
        border &&
        css`
            border-radius: 40px;
            padding: 9px;
            border: 1px solid #ff6e0d;
        `}

    div[class*="DateRangePicker"] {
        z-index: 10;
    }
`;
