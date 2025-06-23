import {atom,atomFamily} from "recoil";

export const dropdownIdsAtom = atom({
    key : "dropdownIdsAtom",
    default : []
})

export const dropdowndataFamily = atomFamily({
    key: "dropdowndataFamily",
    default : {
        type : "",
        value : "",
    }
})