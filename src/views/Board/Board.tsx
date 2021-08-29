import { FC } from "react";
import styled from "styled-components";

// interface Props {}

const BoardCMP: FC = () => {
  return <div>Test Board</div>;
};

const Board = styled(BoardCMP)`
  background: red;
  padding: 10px;
`;

export default Board;
