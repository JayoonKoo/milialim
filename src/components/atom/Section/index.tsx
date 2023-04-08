import React from "react";
import { Wrapper } from "./styled";

export interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Section;
