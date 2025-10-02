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
import React, { useEffect, useMemo, useState } from "react";
import { dropdowndataFamily } from "@/atoms/dropdownAtom";
import { useRecoilState } from "recoil";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Dropdown = React.memo(function Dropdown({ id }) {
    const [data, setData] = useRecoilState(dropdowndataFamily(id))
    const [inputValue, setInputValue] = useState("")
    const [open, setOpen] = useState(true)
    const handleDone = (type, value) => {
        setData({ type, value })
        setOpen(false)
    }

    return (

        <div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="text-white text-sm font-medium pr-2 pl-2 pt-1 pb-1 border border-white/10 rounded-[10px] hover:bg-accent hover:text-accent-foreground">
                    {data.type || "Select option"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-950 text-white border-white/10">
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Add prefix</DropdownMenuSubTrigger>
                        <DropdownMenuPortal className="bg-zinc-950  border-none">
                            <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                <Textarea onChange={(e) => (setInputValue(e.target.value))} placeholder="Enter prefix" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent " ></Textarea>
                                <DropdownMenuItem className="m-0 p-0 w-full "><Button variant="ghost" onClick={() => handleDone("Add prefix", inputValue.trim())} className="text-white p-1 w-full border border-white/10 hover:border-white">Done</Button></DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Add suffix</DropdownMenuSubTrigger>
                        <DropdownMenuPortal className="bg-zinc-950  border-none">
                            <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                <Textarea onChange={(e) => (setInputValue(e.target.value))} placeholder="Enter suffix" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent " ></Textarea>
                                <DropdownMenuItem className="m-0 p-0 w-full "><Button variant="ghost" onClick={() => handleDone("Add suffix", inputValue.trim())} className="text-white p-1 w-full border border-white/10 hover:border-white">Done</Button></DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>AES Encryption</DropdownMenuSubTrigger>
                        <DropdownMenuPortal className="bg-zinc-950  border-none">
                            <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                <Textarea onChange={(e) => (setInputValue(e.target.value))} placeholder="Enter your key" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent " ></Textarea>
                                <DropdownMenuItem className="m-0 p-0 w-full "><Button variant="ghost" onClick={() => handleDone("AES Encryption", inputValue.trim())} className="text-white p-1 w-full border border-white/10 hover:border-white">Done</Button></DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    {/* <DropdownMenuSubComponent title="Add suffix" placeholder="Enter suffix" value={data.value} onDone={(val) => handleDone("Add suffix",val)}/>
                    <DropdownMenuSubComponent title="AES Encryption" placeholder="Enter your key" value={data.value} onDone={(val) => handleDone("AES Encryption",val)}/> */}
                    <DropdownMenuItem title="Base64 Encoding" className="hover:bg-accent hover:text-accent-foreground" onClick={(val) => handleDone("Base64 Encoding", "")}>Base64 Encoding</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
})