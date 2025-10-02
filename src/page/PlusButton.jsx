import React, { useEffect } from "react";
import { PlusImage } from "./plusImage";
import { Button } from "@/components/ui/button";

export const PlusButton = React.memo(function PlusButton({ onClick }) {
    return (

        <Button onClick={onClick} variant="ghost" title="Add option" className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
            <PlusImage />
            {console.log("Plus button rendered")}
        </Button>
        
    )


})