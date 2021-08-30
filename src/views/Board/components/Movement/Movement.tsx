import { faPlus } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "components";

type MovementProps = {
  className?: string;
  children?: ReactNode;
  vertical?: boolean;
};

const MovementCMP: FC<MovementProps> = ({ className, vertical = false }) => {
  return (
    <div className={clsx(className, vertical && "vertical")}>
      <div>
        <Icon icon={faPlus} />
      </div>
    </div>
  );
};

const Movement = styled(MovementCMP)`
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  padding: ${({ theme }) => theme.space(1)};
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  font-size: 0.8rem;
  width: 100%;
  margin-top: ${({ theme }) => theme.space(1)};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space(1)};
  > div {
    display: felx;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &.vertical {
    width: auto;
    height: calc(100vh - 80px);
    width: 30px;
    margin-bottom: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: white;
  }
`;

export default Movement;
