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
  [key: string]: any | any[];
};

const ButtonCMP = ({
  className,
  children,
  startIcon,
  endIcon,
  mode = "primary",
  invert = false,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, `--${mode}`, invert && "--invert")}
      {...props}
      style={style}
    >
      {startIcon ? <span className="start-icon">{startIcon}</span> : null}
      {children ? <div>{children}</div> : null}
      {endIcon ? <span className="end-icon"></span> : null}
    </button>
  );
};

const Button = styled(ButtonCMP)`
  ${({ background }) => background ?? ""};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  cursor: pointer;
  transition: ease color 0.2s, ease background 0.2s;

  padding: ${({ theme }) => `${theme.space(1)} ${theme.space(1.5)}`};
  margin: ${({ theme, margin }) =>
    margin ?? `${theme.space(1)} ${theme.space(0.5)}`};

  > * {
    display: inline-block;
  }

  > div {
    font-size: 0.95rem;
    font-weight: ${({ bold }) => (bold ? "bold" : "500")};
  }

  > .start-icon,
  > .end-icon {
    font-size: 1rem;
  }
  > .start-icon {
    ${({ children, theme }) => (children ? theme.marginInlineEnd(1) : "")};
  }
  > .end-icon {
    ${({ children, theme }) => (children ? theme.marginInlineStart(1) : "")};
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
`;
export default Button;
