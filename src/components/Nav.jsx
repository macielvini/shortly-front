import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <Link to={"/signin"}>
          <NavItem>Entrar</NavItem>
        </Link>
        <Link to={"/signup"}>
          <NavItem>Cadastrar-se</NavItem>
        </Link>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 80px;

  padding-bottom: 25px;

  background: #262835;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &,
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }

  ul {
    gap: 20px;
  }
`;

const NavItem = styled.li`
  &:hover {
    color: #31c86d;
    cursor: pointer;
  }
`;
