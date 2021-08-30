import clsx from "clsx";
import { useState, useRef, ReactElement } from "react";
import styled from "styled-components";
import { useOutsideClick } from "hooks";

type PopOverStatusType = "hover" | "click";

interface Props {
  children: ReactElement;
  className?: string;
  mode?: PopOverStatusType;
}

const PopOverCMP = ({
  children,
  className,
  mode = "hover",
}: Props): ReactElement => {
  //** States */
  const [open, setOpen] = useState<boolean>(false);

  //** Func */
  const onClickOutside = () => {
    if (mode === "click") setOpen(false);
  };
  const getEvent = (): object => {
    switch (mode) {
      case "click":
        return {
          onClick: () => setOpen(!open),
        };

      default:
        return {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        };
    }
  };

  //** Hooks */
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onClickOutside);

  const cn = className;

  return (
    <div ref={wrapperRef} className={cn} {...getEvent()}>
      <div>{children}</div>
      <div className={clsx(`${cn}__container`, open && "__open")}>
        <div className={`${cn}__container__menu`}></div>
      </div>
    </div>
  );
};

const PopOver = styled(PopOverCMP)`
  position: relative;
  display: inline-block;
  &__container {
    z-index: 111;
    position: absolute;
    top: 100%;
    opacity: 0;
    transform: translateY(${({ theme }) => theme.space(1)});
    transition: ease opacity 0.1s, ease transform 0.2s;
    transition-delay: 0s, 0s;
    visibility: hidden;
    &.__open {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
    &__menu {
      padding: ${({ theme }) => theme.space(2)};
      width: 150px;
      height: 250px;
      border-radius: ${({ theme }) => theme.borderRadius.inside};
      background-color: white;
      box-shadow: ${({ theme }) => theme.shadows[2]};
    }
  }
`;

export default PopOver;
