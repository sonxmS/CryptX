import { Button } from "./button";
import { TickImage } from "./tickImage";

export  function CheckButton() {
    return(
        <Button variant="ghost" className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
                        <TickImage />
        </Button>
    )
}