import styled from "styled-components";
import shortlyLogo from "../assets/img/short.svg";

export default function Logo() {
  return (
    <StyledLogo>
      <p>Shortly</p>
      <img src={shortlyLogo} alt="shorts logo" />
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  p {
    font-weight: 200;
    font-size: 64px;
  }

  img {
    height: 90px;
    width: fit-content;
  }
`;
