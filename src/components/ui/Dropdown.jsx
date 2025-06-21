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
import { CrossButton } from "./CrossButton";
import { useState } from "react";

export function Dropdown() {

    const [operation,setOperation] = useState("Transform")

    function Upgrade({operation}) {
        setOperation
    }
    return(
        
        <div>
            <DropdownMenu>
                    <DropdownMenuTrigger className="text-white text-sm font-medium pr-2 pl-2 pt-0.5 pb-0.5 border border-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground">{operation}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-950 text-white border-white/10">
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger onClick={()=>{
                                setOperation("Add prefix")
                            }}>Add prefix</DropdownMenuSubTrigger>
                            <DropdownMenuPortal className="bg-zinc-950  border-none">
                                <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1  border-white/10 text-white">
                                    <Textarea id="prefix" placeholder="Enter prefix" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent" ></Textarea>
                                    <Button variant="ghost" className="text-white p-1 border border-white/10 hover:border-white">Done</Button>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Add suffix</DropdownMenuSubTrigger>
                            <DropdownMenuPortal className="bg-zinc-950  border-none">
                                <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                    <Textarea id="prefix" placeholder="Enter suffix" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent" ></Textarea>
                                    <Button variant="ghost" className="text-white p-1 border border-white/10 hover:border-white">Done</Button>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger onClick={()=>{
                                setOperation("AES Encryption")
                            }}>AES Encryption</DropdownMenuSubTrigger>
                            <DropdownMenuPortal className="bg-zinc-950  border-none">
                                <DropdownMenuSubContent className="bg-zinc-950 w-50 flex flex-col gap-1 border-white/10 text-white">
                                    <Textarea id="prefix" placeholder="Enter your key" className="text-xs text-slate-50 text-[13px] h-20 border-white/10 bg-transparent" ></Textarea>
                                    <Button variant="ghost" className="text-white p-1 border border-white/10 hover:border-white">Done</Button>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground">Base64 encoding</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
        </div>
    )
}