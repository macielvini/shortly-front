import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import RankingList from "../../components/RankingList";

export default function Ranking() {
  return (
    <>
      <Nav />
      <Logo />
      <RankingList />
      <Link to={"/signin"}>
        <Invite>Crie sua conta para usar nosso serviço!</Invite>
      </Link>
    </>
  );
}

const Invite = styled.p`
  font-weight: 700;
  font-size: 36px;

  text-align: center;

  color: #c4ccdc;

  &:hover {
    color: #31c86d;
  }
`;
