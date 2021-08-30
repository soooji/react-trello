import { Fragment, FC, useRef, useState, useEffect, ReactNode } from "react";
import {
  faEllipsisH,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import styled from "styled-components";
import { Button, Icon, Flex } from "components";

import ListItem from "../ListItem";
import Movement from "../Movement";
import { CardType, ListType } from "../types";
import { MovingCardInfoType } from "views/Board/Board";

type ListProps = {
  children?: ReactNode;
  className?: string;
  listIndex: number;

  data: ListType;
  onChange: (l: ListType) => void;

  movingCard?: MovingCardInfoType;
  setMovingCard: (cardIndex: number) => void;
  cancelMoving: () => void;
  performMoving: (targetCardIndex: number) => void;
};

const ListCMP: FC<ListProps> = ({
  className,
  data,
  onChange,
  movingCard,
  setMovingCard,
  cancelMoving,
  performMoving,
  listIndex,
}) => {
  //** States */
  const [title, setTitle] = useState<string>(data.title);

  //-- New Card States -> TODO: Add useOutSideClick trigger
  const [isNewActive, setIsNewActive] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState<string>("");

  //** Hooks */
  const NewCardTextareaRef = useRef<HTMLTextAreaElement>(null);

  //-- Update List Title
  useEffect(() => {
    let tempData: ListType = { ...data };
    tempData.title = title;
    onChange(tempData);
  }, [title]);

  //** Methods */
  const closeNewCard = () => {
    setIsNewActive(false);
    setNewCardTitle("");
  };

  const openNewCard = () => {
    setIsNewActive(true);
    setTimeout(() => {
      NewCardTextareaRef.current?.focus();
    }, 200);
  };

  const addMewCard = () => {
    if (!newCardTitle || newCardTitle?.length === 0) {
      return alert("Type the card title first.");
    }

    // Create
    let newCard: CardType = {
      title: newCardTitle,
      description: "",
    };

    // Push
    let tempData: ListType = { ...data, cards: [...data.cards, newCard] };
    onChange(tempData);

    // Reset
    closeNewCard();
  };

  const onChangeCard = (cardIndex: number, updatedCard: CardType) => {
    // Spread
    let tempCard: CardType = { ...updatedCard };
    let tempCards: CardType[] = [...data.cards];

    // Update at its index
    tempCards[cardIndex] = tempCard;
    let tempData: ListType = { ...data, cards: tempCards };

    // Update List
    onChange(tempData);
  };

  return (
    <div className={clsx(className, "list")}>
      {/* List Header */}
      <Flex className="list__title">
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value ?? "")}
        >
          {title}
        </textarea>
        <Button
          startIcon={<Icon icon={faEllipsisH} />}
          mode="light"
          noBg
          mini
          height="35px"
          margin="0px"
        />
      </Flex>

      {/* List Items (Tasks) */}
      <div className="list__items">
        {movingCard?.listIndex !== undefined &&
        (movingCard?.listIndex !== listIndex || movingCard?.cardIndex !== 0) ? (
          <Movement onClick={() => performMoving(0)} />
        ) : null}

        {data.cards.map((v, k) => (
          <Fragment key={k}>
            <ListItem
              data={v}
              onChange={(newCard: CardType) => onChangeCard(k, newCard)}
              isMoving={
                movingCard?.listIndex === listIndex &&
                movingCard?.cardIndex === k
              }
              moveCard={() => setMovingCard(k)}
              cancelMoving={cancelMoving}
              parentTitle={data.title}
            />
            {movingCard?.cardIndex !== undefined &&
            (movingCard?.listIndex !== listIndex ||
              (movingCard?.cardIndex !== k &&
                movingCard?.cardIndex - 1 !== k)) ? (
              <Movement onClick={() => performMoving(k)} />
            ) : null}
          </Fragment>
        ))}

        {/* List Footer */}
        <div className="list__footer">
          {isNewActive ? (
            <>
              <textarea
                ref={NewCardTextareaRef}
                placeholder="Enter a title for this card..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
              ></textarea>
              <Button onClick={addMewCard}>Add Card</Button>
              <Button
                className="list__footer__custom-button"
                startIcon={<Icon icon={faTimes} />}
                mode="light"
                noBg
              />
            </>
          ) : (
            <Button
              className="list__footer__custom-button full-width"
              startIcon={<Icon icon={faPlus} />}
              onClick={openNewCard}
              mode="light"
              margin="0px"
              noBg
              mini
            >
              Add another card
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const List = styled(ListCMP)`
  background: ${({ theme }) => theme.colors.grey[7]};
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  padding: ${({ theme }) => theme.space(0.5)};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
  width: 272px;
  margin: ${({ theme }) => theme.space(1)};
  flex-shrink: 0;
  margin-bottom: auto;

  .list {
    &__title {
      textarea {
        border: none;
        outline: none;
        background: transparent;
        resize: none;
        font-weight: 600;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.grey[3]};
        width: 100%;
        border-radius: ${({ theme }) => theme.borderRadius.inside};
        border: 2px transparent solid;
        overflow-wrap: break-word;
        min-height: 28px;
        padding: ${({ theme }) => theme.space(1)};
        &:focus {
          background: white;
          border: 2px ${({ theme }) => theme.colors.primary.light} solid;
        }
      }
    }
    &__items {
      padding: ${({ theme }) => theme.space(0.5)};
      max-height: calc(100vh - 120px);
      overflow-y: auto;
      overflow-x: hidden;
    }
    &__footer {
      padding: ${({ theme }) => theme.space(0.5)};
      &__custom-button {
        &.full-width {
          width: 100%;
          * {
            justify-content: flex-start;
          }
        }
        &:hover {
          background: ${({ theme }) => theme.colors.grey[6]};
        }
      }
      textarea {
        background: ${({ theme }) => theme.colors.grey[9]};
        padding: ${({ theme }) => theme.space(1)};
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: ${({ theme }) => theme.borderRadius.inside};
        cursor: pointer;
        border: none;
        outline: none;
        width: 100%;
        resize: none;
        font-weight: 400;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.grey[3]};
        min-height: 80px;
      }
    }
  }
`;

export default List;
