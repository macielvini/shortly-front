import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import rankingIcon from "../assets/img/ranking.svg";
import { getRanking } from "../services/api";
import { RankingItem } from "./RankingItem";

export function Ranking() {
  const [rankingList, setRankingList] = useState([]);

  useEffect(() => {
    // axios.get("https://shortly-api-yxcy.onrender.com/ranking")
    getRanking()
      .then((res) => setRankingList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <RankingTitle>
        <img src={rankingIcon} alt="ícone de um troféu" />
        Ranking
      </RankingTitle>
      <RankingContainer>
        {rankingList.length > 0
          ? rankingList.map((r, index) => (
              <RankingItem
                key={index}
                index={index + 1}
                name={r.name}
                linkCount={r.linkCount}
                visitCount={r.visitCount}
              />
            ))
          : "Carregando..."}
      </RankingContainer>
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

const RankingContainer = styled.ul`
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 14px;

  background: #000000;
  border: 1px solid #31c86d;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px;

  padding: 20px 30px;
`;
