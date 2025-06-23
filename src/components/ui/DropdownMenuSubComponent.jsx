import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuPortal,
    DropdownMenuSubContent

} from "@/components/ui/dropdown-menu"
import { Textarea } from "./textarea";
import { Button } from "./button"
import { useRecoilState } from "recoil";
import { useState } from "react";


export function DropdownMenuSubComponent({title,placeholder,value,onDone}) {
    const [inputValue,setInputValue]=useState(value || "")

    return(
                            <DropdownMenuSub>
                            <DropdownMenuSubTrigger>{title}</DropdownMenuSubTrigger>
                            <DropdownMenuPortal className="bg-zinc-950  border-none">
                                <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                    <Textarea  onChange={(e)=>(setInputValue(e.target.value))} placeholder={placeholder} className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent " ></Textarea>
                                    <DropdownMenuItem className="m-0 p-0 w-full "><Button variant="ghost" onClick={()=>onDone(inputValue.trim())} className="text-white p-1 w-full border border-white/10 hover:border-white">Done</Button></DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
    )
}