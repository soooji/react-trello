import clsx from "clsx";
import { useState, useRef, ReactElement } from "react";
import styled from "styled-components";
import { useOutsideClick } from "hooks";

type PopOverStatusType = "hover" | "click";

interface Props {
  children: ReactElement;
  content?: ReactElement;
  title?: string;
  className?: string;
  fullWidth?: boolean;
  minWidth?: string;
  mode?: PopOverStatusType;
}

const PopOverCMP = ({
  children,
  className,
  mode = "hover",
  title,
  content,
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
    <div ref={wrapperRef} className={cn}>
      <div {...getEvent()}>{children}</div>
      <div className={clsx(`${cn}__container`, open && "__open")}>
        <div className={`${cn}__container__menu`}>
          {title ? (
            <div className={`${cn}__container__menu__title`}>
              <p>{title}</p>
            </div>
          ) : null}
          <div className={`${cn}__container__menu__content`}>{content}</div>
        </div>
      </div>
    </div>
  );
};

const PopOver = styled(PopOverCMP)`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  position: relative;
  display: inline-block;
  &__container {
    z-index: 1111;
    position: absolute;
    top: 100%;
    padding-top: ${({ theme }) => theme.space(0.5)};
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
      min-width: ${({ minWidth }) => minWidth ?? "auto"};
      width: 150px;
      height: 250px;
      border-radius: ${({ theme }) => theme.borderRadius.inside};
      background-color: white;
      box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
      &__title {
        p {
          padding: ${({ theme }) => theme.space(1.5)};
          text-align: center;
          margin: 0;
          font-size: 0.9rem;
          color: ${({ theme }) => theme.colors.grey[5]};
          width: 100%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey[6]};
        }
      }
      &__content {
        padding: ${({ theme }) => theme.space(2)};
      }
    }
  }
`;

export default PopOver;
