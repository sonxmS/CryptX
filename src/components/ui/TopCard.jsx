
import { Card } from "./card";
import { CheckButton } from "./CheckButton";
import { Dropdown } from "./Dropdown";
import { PlusButton } from "./PlusButton";

export function TopCard() {
    return (
        <>
            <Card className="size-full transition-[border,box-shadow]  mt-3 duration-300 ease-in-out flex-row justify-between p-2 bg-slate-50/5 backdrop-blur-[18px] border-white/10 min-w-90 w-fit max-w-5xl shadow-[0_0_20px_rgba(0,255,255,0.05)]">
                <Dropdown />
                <div className="flex gap-1">
                    <PlusButton />
                    <CheckButton />
                </div>
            </Card>
        </>
    )
}