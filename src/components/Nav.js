import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <ul>Home</ul>
      <ul>Cadastrar-se</ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 80px;

  display: flex;
  align-items: flex-end;
  justify-content: end;
  gap: 20px;

  padding-bottom: 15px;

  background: white;
`;
