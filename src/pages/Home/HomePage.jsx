import styled from "styled-components";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import { Ranking } from "../../components/Ranking";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Logo />
      <Ranking />
      <Invite>Crie sua conta para usar nosso serviço!</Invite>
    </>
  );
}

const Invite = styled.p`
  font-weight: 700;
  font-size: 36px;

  text-align: center;

  color: #c4ccdc;
`;
