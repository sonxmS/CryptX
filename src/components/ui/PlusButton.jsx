import { Button } from "./button";
import { PlusImage } from "./plusImage";

export  function PlusButton() {
    return(
        <Button variant="ghost" className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
                        <PlusImage />
        </Button>
    )
}