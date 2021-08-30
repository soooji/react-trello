import { useEffect, useState, FC, ReactNode } from "react";
import styled from "styled-components";
import { List } from "./components";
import { Button, Flex, Icon } from "components";
import { ListType } from "./components/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "hooks";

type BoardProps = {
  className?: string;
  children?: ReactNode;
};

export type MovingCardInfoType = {
  listIndex: number;
  cardIndex: number;
} | null;

const BoardCMP: FC = ({ className }: BoardProps) => {
  // ** States */
  const [storagedList, setStoragedList] = useLocalStorage("TRELLO_LISTS");
  const [lists, setLists] = useState<ListType[]>(
    storagedList ? JSON.parse(storagedList) : []
  );

  //-- We use bellow state to handle cards movement
  const [movingCard, setMovingCard] = useState<MovingCardInfoType>(null);

  // ** Hooks */

  useEffect(() => {
    setStoragedList(JSON.stringify(lists));
  }, [lists]);

  //** Functions */
  const onChangeList = (index: number, updatedList: ListType) => {
    if (index < 0) return;

    let tempList: ListType[] = [...lists];
    tempList[index] = { ...updatedList };
    setLists(tempList);
  };

  const addList = () => {
    let newList: ListType = {
      title: lists.length === 0 ? "My First List" : `List ${lists.length + 1}`,
      cards: [],
    };

    let tempList: ListType[] = [...lists];
    tempList.push(newList);
    setLists(tempList);
  };

  return (
    <div className={className}>
      {/* Lists */}
      <Flex fw="wrap" className="lists-container">
        {lists.map((v, k) => (
          <List
            data={v}
            onChange={(l: ListType) => onChangeList(k, l)}
            movingCard={movingCard?.listIndex === k ? movingCard : null}
            setMovingCard={(cardIndex: number) =>
              setMovingCard({ listIndex: k, cardIndex })
            }
            cancelMoving={() => setMovingCard(null)}
          />
        ))}
        <Button
          className="new-list"
          startIcon={<Icon icon={faPlus} />}
          mode="light"
          mini
          onClick={addList}
        >
          Add {lists.length === 0 ? "a" : "another"} List
        </Button>
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
  .new-list {
    margin-bottom: auto;
  }
`;

export default Board;
