import { Button } from "./button";
import { PlusImage } from "./plusImage";

export  function PlusButton({onClick}) {
    return(
        
        <Button onClick={onClick} variant="ghost" title="Add option" className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
                        <PlusImage />
                        
        </Button>
    )
    
}