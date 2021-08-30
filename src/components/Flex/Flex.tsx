import * as CSS from "csstype";
import styled from "styled-components";

const Flex = styled.div`
  ${({
    fd,
    fw,
    jc,
    ai,
    ac,
    fullWidth = false,
    fullHeight = false,
  }: {
    fd?: CSS.Property.FlexDirection;
    fw?: CSS.Property.FlexWrap;
    jc?: CSS.Property.JustifyContent;
    ai?: CSS.Property.AlignItems;
    ac?: CSS.Property.AlignContent;
    fullWidth?: boolean;
    fullHeight?: boolean;
    className?: string;
  }) =>
    `
   display: flex;
   flex-direction: ${fd ?? "row"};
   flex-wrap: ${fw ?? "nowrap"};
   justify-content: ${jc ?? "flex-start"};
   align-items: ${ai ?? "stretch"};
   align-content: ${ac ?? "stretch"};
   ${fullWidth ? "width: 100%;" : ""}
   ${fullHeight ? "height: 100%;" : ""}
`}
`;
export default Flex;
