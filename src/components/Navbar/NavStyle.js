import styled from "styled-components";

export const Nav = styled.div`
    background: #000;
    width: 100%;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    position: sticky;
    top: 0;
    z-index: 10;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`