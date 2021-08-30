import { useEffect, useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import {
  faAlignLeft,
  faStickyNote,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Button, Flex, Icon, PopOver } from "components";
import { Description } from "./components";
import { CardType } from "../types";

type CardDetailProps = {
  children?: ReactNode;
  className?: string;

  data: CardType;
  onChange: (updatedCard: CardType) => void;
  parentTitle?: string;
};

const CardDetailCMP: FC<CardDetailProps> = ({
  className,
  data,
  onChange,
  parentTitle,
}) => {
  //** States */
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description ?? "");

  //** Hooks */
  // Update Card Data
  useEffect(() => {
    // Copy
    let tempData: CardType = { ...data };

    // Update and Push
    tempData.title = title;
    tempData.description = description;

    onChange(tempData);
  }, [title, description]);

  return (
    <div className={className}>
      {/* Title Part */}
      <Flex className="part title-bar">
        <Icon className="part__icon" icon={faStickyNote} />
        <div className="part__content">
          <textarea
            placeholder="Enter List Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value ?? "")}
          >
            {title}
          </textarea>
          {parentTitle ? (
            <p>
              in list{" "}
              <div>
                {parentTitle.length > 0 ? parentTitle : "[No Named List]"}
              </div>
            </p>
          ) : null}
        </div>
      </Flex>

      {/* Added Tools Part */}
      <Flex className="card-details">
        <div className="card-details__content">
          <Flex className="part">
            <Icon className="part__icon" icon={faAlignLeft} />
            <div className="part__content">
              <div className="part__content__title">Description</div>
              <aside>
                <Description
                  description={description}
                  setDescription={setDescription}
                />
              </aside>
            </div>
          </Flex>
        </div>

        {/* Tools Part */}
        <div className="card-details__tools">
          <p>ADD TO CARD</p>
          <div className="card-details__items">
            <PopOver
              content={<div>Coming soon...</div>}
              mode="click"
              fullWidth
              title="Members"
              minWidth="302px"
            >
              <Button startIcon={<Icon icon={faUser} />} mode="grey">
                Members
              </Button>
            </PopOver>
          </div>
        </div>
      </Flex>
    </div>
  );
};

const CardDetail = styled(CardDetailCMP)`
  padding: ${({ theme }) => theme.space(2)};
  min-height: 500px;

  .card-details {
    width: 100%;
    &__tools {
      width: 200px;
      height: 100px;
      flex-shrink: 0;
      > p {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.grey[4]};
        margin: 0;
      }
      button {
        width: 100%;
        margin: 0;
        margin-top: ${({ theme }) => theme.space(1)};
        > div {
          justify-content: flex-start;
        }
      }
    }
    &__content {
      width: 100%;
    }
  }

  .part {
    margin-top: ${({ theme }) => theme.space(4)};
    &:is(.title-bar) {
      margin-top: ${({ theme }) => theme.space(1)};
    }
    &__content {
      width: 100%;
      &__title {
        font-weight: 500;
        font-size: 1rem;
        margin-top: ${({ theme }) => theme.space(0.2)};
        color: ${({ theme }) => theme.colors.grey[2]};
      }
      aside {
        margin-top: ${({ theme }) => theme.space(1)};
      }
    }
    &__icon {
      ${({ theme }) => theme.marginInlineStart(1)};
      color: ${({ theme }) => theme.colors.grey[4]};
      font-size: 1.3rem;
      flex-shrink: 0;
      width: 30px;
    }
  }

  .title-bar {
    textarea {
      margin-top: ${({ theme }) => theme.space(-1.2)};
      border: none;
      outline: none;
      background: transparent;
      resize: none;
      font-weight: 500;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.grey[2]};
      width: calc(100% - 80px);
      border-radius: ${({ theme }) => theme.borderRadius.inside};
      border: 2px transparent solid;
      overflow-wrap: break-word;
      height: 45px;
      padding: ${({ theme }) => theme.space(1)};
      ${({ theme }) => theme.marginInlineStart(-1)};
      transition: ease border 0.2s;
      &:focus {
        border: 2px ${({ theme }) => theme.colors.primary.light} solid;
      }
    }
    p {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.grey[4]};
      font-weight: 400;
      margin: 0;
      div {
        display: inline;
        cursor: pointer;
        text-decoration: underline;
        &:hover {
          color: ${({ theme }) => theme.colors.grey[3]};
        }
      }
    }
  }
`;

export default CardDetail;
