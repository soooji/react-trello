import { useRef, useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Button, Icon } from "components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type MembersProps = {
  children?: ReactNode;
  className?: string;
};

const MembersCMP: FC<MembersProps> = ({ className }) => {
  return <div className={className}></div>;
};

const Members = styled(MembersCMP)``;

export default Members;
