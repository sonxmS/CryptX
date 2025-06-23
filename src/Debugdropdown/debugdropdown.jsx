
import { allDropdownDataSelector } from "@/atoms/selector";
import { useRecoilValue } from "recoil";


export function DebugDropdownValues() {
    const allDropdowns = useRecoilValue(allDropdownDataSelector
    );
    console.log("All dropdown data:", allDropdowns);

    return (
        <pre className="text-white text-xs">
            {JSON.stringify(allDropdowns, null, 2)}
        </pre>
    );
}
