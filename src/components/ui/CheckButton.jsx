import { Button } from "./button";
import { TickImage } from "./tickImage";

export  function CheckButton({onClick}) {
    return(
        <Button variant="ghost" title="Confirm" onClick={onClick} className="text-white border border-white/10 hover:border-white  size-6 rounded-full ">
                        <TickImage />
        </Button>
    )
}