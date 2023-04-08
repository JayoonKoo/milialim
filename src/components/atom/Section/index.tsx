import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styled";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default styled(Section)``;
