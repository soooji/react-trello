import { useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Flex, Icon } from "components";
import { faAlignLeft, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { Description } from "./components";

type CardDetailProps = {
  children?: ReactNode;
  className?: string;
};

const CardDetailCMP: FC<CardDetailProps> = ({ className }) => {
  const [title, setTitle] = useState(
    "Create as many cards as you want, we've got an unlimited supply!"
  );
  const [description, setDescription] = useState(
    "There's all kinds of cool stuff back here."
  );

  return (
    <div className={className}>
      {/* Title Part */}
      <Flex className="part title-bar">
        <Icon className="part__icon" icon={faStickyNote} />
        <div className="part__content">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value ?? "")}
          >
            {title}
          </textarea>
          <p>
            in list <div>Stuff to Try</div>
          </p>
        </div>
      </Flex>

      <Flex className="part title-bar">
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
  );
};

const CardDetail = styled(CardDetailCMP)`
  padding: ${({ theme }) => theme.space(2)};
  // Title Part
  .part {
    margin-top: ${({ theme }) => theme.space(2)};
    &:first-child {
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
