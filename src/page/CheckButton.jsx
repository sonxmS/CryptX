import React from "react";
import { Button } from "@/components/ui/button";
import { TickImage } from "@/components/ui/tickImage";

export  const CheckButton = React.memo(function CheckButton({onClick}) {
    return(
        <Button variant="ghost" title="Confirm" onClick={onClick} className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
                        <TickImage />
                        {console.log("check button rendered")}
        </Button>
        
    )
})