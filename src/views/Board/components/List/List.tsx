import {
  faEllipsisH,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Button, Icon, Flex } from "components";
import { useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import ListItem from "../ListItem";
import Movement from "../Movement";

type ListProps = {
  children?: ReactNode;
  id: number;
  className?: string;
  rows: any[];
};

const ListCMP: FC<ListProps> = ({ className, rows, id }) => {
  //** States */
  const [title, setTitle] = useState<string>("Stuff to Try (this is a list)");

  //  New Card States
  // TODO: Add use ourtside textarea click trigger -> to hide it
  const [isNewActive, setIsNewActive] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState<string>("");

  //** Methods */
  const closeNewCard = () => {
    setIsNewActive(false);
    setNewCardTitle("");
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
        <Movement />
        {rows.map(() => (
          <>
            <ListItem id={2} />
            <Movement />
          </>
        ))}

        {/* List Footer */}
        <div className="list__footer">
          {isNewActive ? (
            <>
              <textarea
                placeholder="Enter a title for this card..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
              ></textarea>
              <Button>Add Card</Button>
              <Button
                className="list__footer__custom-button"
                startIcon={<Icon icon={faTimes} />}
                mode="light"
                noBg
                onClick={closeNewCard}
              />
            </>
          ) : (
            <Button
              className="list__footer__custom-button full-width"
              startIcon={<Icon icon={faPlus} />}
              onClick={() => setIsNewActive(true)}
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
