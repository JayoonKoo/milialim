import { atom } from "recoil";

const modalInitailState = {
  addListItem: false,
};

export const modalState = atom({
  key: "modalState",
  default: modalInitailState,
});

export type ModalId = keyof typeof modalInitailState;
