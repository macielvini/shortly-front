import styled from "styled-components";

export function RankingItem({ index, name, linkCount, visitCount }) {
  return (
    <Item>
      {index}. {name} - {linkCount} links - {visitCount} visualizações
    </Item>
  );
}

const Item = styled.li`
  font-size: 22px;

  color: #c4ccdc;
`;
