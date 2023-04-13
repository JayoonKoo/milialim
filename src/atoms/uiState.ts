import { atom } from "recoil";

const modalInitailState = {
  addListItem: false,
};

export const modalState = atom({
  key: "modalState",
  default: modalInitailState,
});

const alertInitialState = {
  isOpen: false,
};

export const alertState = atom({
  key: "alertState",
  default: alertInitialState,
});

export type ModalId = keyof typeof modalInitailState;
