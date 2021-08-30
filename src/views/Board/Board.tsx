import { FC, ReactNode } from "react";
import styled from "styled-components";
import { List, Movement } from "./components";
import { Flex } from "components";

type BoardProps = {
  className?: string;
  children?: ReactNode;
};

const BoardCMP: FC = ({ className }: BoardProps) => {
  return (
    <div className={className}>
      <Flex fw="wrap" className="lists-container">
        <List id={3} rows={[1, 2]} />
        <Movement vertical />
        <List id={4} rows={[1]} />
        <Movement vertical />
        <List
          id={1}
          rows={[1, 2, 3, 4, 5, 6, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5]}
        />
        <Movement vertical />
      </Flex>
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
