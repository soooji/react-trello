import styled from "styled-components";
import { CSSProperties, ReactNode } from "react";
import * as CSS from "csstype";
import clsx from "clsx";

type ButtonProps = {
  children?: ReactNode;
  className: string;
  startIcon?: ReactNode;
  endtIcon?: ReactNode;
  background?: CSS.Property.Background;
  mode?: "primary" | "light";
  invert?: boolean;
  style?: CSSProperties;
  bold?: boolean;
  margin?: CSS.Property.Margin;
  height?: CSS.Property.Height;
  noBg: boolean;
  mini?: boolean;
  [key: string]: any | any[];
};

const ButtonCMP = ({
  className,
  children,
  startIcon,
  endIcon,
  mode = "primary",
  invert = false,
  noBg = false,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        `--${mode}`,
        invert && "--invert",
        noBg && "--transparent"
      )}
      style={style}
      {...props}
    >
      <div>
        {startIcon ? <span className="start-icon">{startIcon}</span> : null}
        {children ? <div className="title">{children}</div> : null}
        {endIcon ? <span className="end-icon"></span> : null}
      </div>
    </button>
  );
};

const Button = styled(ButtonCMP)`
  ${({ background }) => background ?? ""};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  cursor: pointer;
  transition: ease color 0.2s, ease background 0.2s;
  min-width: 40px;
  height: ${({ height }) => height ?? "auto"};
  width: ${({ width }) => width ?? "auto"};

  padding: ${({ theme, mini }) =>
    mini
      ? `${theme.space(1)} ${theme.space(1)}`
      : `${theme.space(1)} ${theme.space(1.5)}`};
  margin: ${({ theme, margin }) =>
    margin ?? `${theme.space(1)} ${theme.space(0.5)}`};

  font-size: ${({ mini }) => (mini ? "0.85rem" : ".9rem")};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      display: inline-block;
    }
    > .title {
      font-weight: ${({ bold }) => (bold ? "bold" : "400")};
    }
    > .start-icon {
      ${({ children, theme }) => (children ? theme.marginInlineEnd(1) : "")};
    }
    > .end-icon {
      ${({ children, theme }) => (children ? theme.marginInlineStart(1) : "")};
    }
  }

  &.--primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
    &.--invert {
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.dark};
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }
  &.--light {
    background-color: rgba(255, 255, 255, 0.8);
    color: ${({ theme }) => theme.colors.grey[1]};
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
    &.--invert {
      background-color: rgba(255, 255, 255, 0.3);
      color: white;
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
  &.--transparent {
    background: transparent;
    color: ${({ theme }) => theme.colors.grey[2]};
    &.--light {
      color: ${({ theme }) => theme.colors.grey[4]};
      &:hover {
        color: ${({ theme }) => theme.colors.grey[3]};
      }
    }
    &.--lighter {
      color: ${({ theme }) => theme.colors.grey[5]};
      &:hover {
        color: ${({ theme }) => theme.colors.grey[4]};
      }
    }
    &:hover {
      background: ${({ theme }) => theme.colors.grey[7]};
    }
  }
`;
export default Button;
