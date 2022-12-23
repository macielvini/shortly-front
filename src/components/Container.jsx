import styled from "styled-components";

export default function Container({ children }) {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;

  width: 100vw;

  & > * {
    width: 100%;
  }

  padding-top: 100px;

  &,
  nav {
    padding-inline: 15%;
  }

  @media (max-width: 1000px) {
    &,
    nav {
      padding-inline: 10%;
    }
  }
`;
