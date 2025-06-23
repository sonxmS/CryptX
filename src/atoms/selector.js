import { selector } from "recoil";
import { dropdownIdsAtom, dropdowndataFamily } from "./dropdownAtom";

export const allDropdownDataSelector = selector({
    key: "allDropdownDataSelector",
    get: ({ get }) => {
        const id = get(dropdownIdsAtom)
        const data = get(dropdowndataFamily(id));
        return id.map(id => ({
            id,
            ...get(dropdowndataFamily(id))
        }));
    },
});
