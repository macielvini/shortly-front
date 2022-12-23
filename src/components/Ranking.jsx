import styled from "styled-components";

import rankingIcon from "../assets/img/ranking.svg";

export function Ranking() {
  return (
    <Container>
      <RankingTitle>
        <img src={rankingIcon} alt="ícone de um troféu" />
        Ranking
      </RankingTitle>
      <RankingContainer>ljljl</RankingContainer>
    </Container>
  );
}

const RankingTitle = styled.p`
  font-weight: 700;
  font-size: 36px;

  color: #31c86d;

  max-height: 56px;
  display: flex;
  align-items: center;
  gap: 15px;

  img {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;
`;

const RankingContainer = styled.div`
  width: 1017px;
  height: 241px;

  background: #000000;
  border: 1px solid #31c86d;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px;

  padding: 20px 30px;

  font-weight: 700;
  font-size: 22px;

  color: #c4ccdc;
`;
