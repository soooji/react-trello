import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  className: string;
  icon?: IconProp;
  [key: string]: any | any[];
};

const Icon = ({ className, icon, ...props }: IconProps) => {
  return (
    <span className={className} {...props}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </span>
  );
};

//  Styles
type StyledIconType = {
  mini?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  size?: string;
};

const StyledIcon = styled(Icon)`
  ${({ mini, small, medium, large, size }: StyledIconType) => `
        ${mini ? `font-size: 12px;` : ``}
        ${small ? `font-size: 14px;` : ``}
        ${medium ? `font-size: 16px;` : ``}
        ${large ? `font-size: 19px;` : ``}
        ${size ? `font-size: ${size};` : ``}
    `}
`;
export default StyledIcon;
