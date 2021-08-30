import { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Header } from "./components";

type LayoutProps = {
  children?: ReactNode;
  className?: string;
};

const LayoutCMP: FC = ({ children, className }: LayoutProps) => {
  return (
    <div className={className}>
      <Header />
      <div className="page-container">{children}</div>
    </div>
  );
};

const Layout = styled(LayoutCMP)`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary.main};
  > .page-container {
    overflow: hidden;
    height: calc(100% - 42px);
  }
`;

export default Layout;
