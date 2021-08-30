import { useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { faExchangeAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button, Icon, Flex } from "components";
import { CardDetail } from "./../index";
import { CardType } from "../types";
import clsx from "clsx";

type ListItemProps = {
  children?: ReactNode;
  className?: string;

  data: CardType;
  onChange: (updatedCard: CardType) => void;
  isMoving?: boolean;
  moveCard: () => void;
  cancelMoving: () => void;
  parentTitle?: string
};

const ListItemCMP: FC<ListItemProps> = ({
  className,
  data,
  onChange,
  moveCard,
  cancelMoving,
  isMoving = false,
  parentTitle,
}) => {
  //** States */
  const [isEditOpen, setIsEditOpen] = useState(false);

  //** Functions */
  const onMove = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMoving) {
      cancelMoving();
    } else {
      moveCard();
    }
  };

  return (
    <div>
      <Modal open={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <CardDetail data={data} onChange={onChange} parentTitle={parentTitle} />
      </Modal>
      <Flex
        className={clsx(className, isMoving && "moving")}
        onClick={() => setIsEditOpen(true)}
      >
        <div className="title">{data.title}</div>
        <Button
          startIcon={<Icon icon={!isMoving ? faExchangeAlt : faTimes} />}
          mode="light"
          noBg
          mini
          height="35px"
          margin="0px"
          onClick={onMove}
        />
      </Flex>
    </div>
  );
};

const ListItem = styled(ListItemCMP)`
  background: ${({ theme }) => theme.colors.grey[9]};
  padding: ${({ theme }) => theme.space(1)};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space(1)};

  &.moving {
    animation: mymove;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes mymove {
      0% {
        transform: rotate(0deg) scale(1.02);
      }
      25% {
        transform: rotate(1deg) scale(1.02);
      }
      50% {
        transform: rotate(0deg) scale(1.02);
      }
      75% {
        transform: rotate(-1deg) scale(1.02);
      }
      100% {
        transform: rotate(0deg) scale(1.02);
      }
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors.grey[8]};
  }

  > button {
    flex-shrink: 0;
  }

  > .title {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey[2]};
  }
`;

export default ListItem;
