import { selector } from "recoil";
import { countAtom } from "../atoms/countAtom";

export const theCountSelector = selector({
    key: "theCountSelector",
    get: ({get}) => {
        const count = get(countAtom);
        if (count % 2 == 0) {
            return "Count is Even!"
        } else {
            return "Count is Odd!"
        }

    }
})