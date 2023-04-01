import React from "react";
import { createPortal } from "react-dom";
import { Wrapper } from "./styled";

interface PopUpProps {
  children: React.ReactNode;
}

function PopUp({ children }: PopUpProps) {
  const el = document.getElementById("modal");

  return createPortal(<Wrapper>{children}</Wrapper>, el!);
}

export default PopUp;
