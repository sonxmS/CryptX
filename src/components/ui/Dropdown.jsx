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
import { useState } from "react";
import { DropdownMenuSubComponent } from "./DropdownMenuSubComponent";
import { dropdowndataFamily } from "@/atoms/dropdownAtom";
import { useRecoilState } from "recoil";

export function Dropdown({id}) {

    const [data, setData] = useRecoilState(dropdowndataFamily(id))

    const handleDone = (type,value) => {
        setData({type,value})
    }

    
    return (

        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-white text-sm font-medium pr-2 pl-2 pt-0.5 pb-0.5 border border-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground">{data.type || "Transform"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-950 text-white border-white/10">
                    <DropdownMenuSubComponent title="Add prefix" placeholder="Enter prefix" value={data.value} onDone={(val) => handleDone("Add prefix",val)}/>
                    <DropdownMenuSubComponent title="Add suffix" placeholder="Enter suffix" value={data.value} onDone={(val) => handleDone("Add suffix",val)}/>
                    <DropdownMenuSubComponent title="AES Encryption" placeholder="Enter your key" value={data.value} onDone={(val) => handleDone("AES Encryption",val)}/>
                    <DropdownMenuItem title="Base64 Encoding" className="hover:bg-accent hover:text-accent-foreground" onClick={(val) => handleDone("Base64 Encoding","")}>Base64 Encoding</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}