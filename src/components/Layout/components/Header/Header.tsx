import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Flex, Icon } from "components";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { Button } from "components";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  children?: ReactNode;
  className?: string;
};

const HeaderCMP: FC = ({ className }: HeaderProps) => {
  return (
    <Flex className={className} jc="space-between" ai="center">
      <div className="__aside">
        <Button
          mode="light"
          startIcon={<Icon icon={faBars} />}
          bold
          invert
          margin="0px 2px"
        />
        <Button
          mode="light"
          startIcon={<Icon icon={faHome} />}
          bold
          invert
          margin="0px 2px"
        />
        <Button
          mode="light"
          startIcon={<Icon icon={faTrello} />}
          bold
          invert
          margin="0px 2px"
        >
          Boards
        </Button>
      </div>
      <Flex jc="center" className="main-logo" ai="center">
        <Icon icon={faTrello} className="main-logo__icon" />
        <h2>Trello</h2>
      </Flex>
      <div className="__aside"></div>
    </Flex>
  );
};

const Header = styled(HeaderCMP)`
  background: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => `${theme.space(0.5)} 0`};
  width: 100%;
  height: 42px;

  .main-logo {
    width: 150px;
    color: white;
    opacity: 0.6;
    cursor: pointer;
    transition: ease opacity 0.2s;
    &__icon {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 1.2rem;
      margin-top: 2px;
      margin-bottom: 0;
      ${({ theme }) => theme.marginInlineStart(1)};
    }
    &:hover {
      opacity: 1;
    }
  }

  > .__aside {
    ${({ theme }) => theme.paddingInlineStart("2px")};
    ${({ theme }) => theme.paddingInlineEnd("2px")};
    width: calc(50% - 75px);
  }
`;

export default Header;
