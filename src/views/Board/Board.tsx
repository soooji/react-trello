import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "components";
import { List } from "./components";

type BoardProps = {
  className?: string;
  children?: ReactNode;
};

const BoardCMP: FC = ({ className }: BoardProps) => {
  return (
    <div className={className}>
      <div className="lists-container">
        <List id={3} />
        <List id={4} />
        <List id={1} />
        <List id={3} />
        <List id={4} />
        <List id={1} />
      </div>
    </div>
  );
};

const Board = styled(BoardCMP)`
  width: 100vw;
  height: 100%;
  overflow-x: auto;
  position: relative;
  > .lists-container {
    position: absolute;
    width: max-content;
  }
`;

export default Board;
