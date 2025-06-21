import { Button } from "./button";
import { ButtonImg } from "./ButtonImg";
import { Card } from "./card";
import { Textarea } from "./textarea";

export function MainCard({label,placeholderLabel,button,inputId,outputId}) {
    return(<Card className="size-full transition-[border,box-shadow]  duration-300 ease-in-out px-4 p-7 bg-slate-50/5 backdrop-blur-[18px] border-white/10 hover:border-white w-90 shadow-[0_0_20px_rgba(0,255,255,0.05)]">
                    <label htmlFor={inputId} className="text-slate-50">{label}</label>
                    <Textarea id={inputId} placeholder={placeholderLabel} className="text-slate-50 text-[13px] transition-[border] duration-200 ease-in-out h-40 border-white/10 hover:border-white">
                    </Textarea>
                    <Textarea id={outputId} placeholder="Your result would appear here" className="text-slate-50 text-[13px] h-40 border-white/10" disabled></Textarea>
                    <div className="flex gap-2 ">
                        <Button variant="ghost" className="text-white border border-white/10 hover:border-white" >{button}</Button>
                        <Button variant="ghost" size="icon" title="Copy to clipboard" className="hover:stroke-black border border-white/10 hover:border-white text-white" ><ButtonImg /></Button>
                    </div>
                </Card>)
}