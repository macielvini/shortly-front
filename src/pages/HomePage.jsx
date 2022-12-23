import styled from "styled-components";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Logo />
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In molestias
        illo ut similique quibusdam ipsum molestiae qui excepturi, atque
        praesentium, modi doloribus ullam dicta error magnam quidem mollitia
        dignissimos nemo!
      </Text>
    </>
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

const Text = styled.p`
  width: 400px;
`;
