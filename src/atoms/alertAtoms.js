import { atom } from "recoil";

export const alertMessageAtom = atom({
    key: "alertMessageAtom",
    default: "",
});

export const showAlertAtom = atom({
    key: "showAlertAtom",
    default: false,
});
