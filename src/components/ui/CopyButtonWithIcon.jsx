import React, { memo } from "react";
import { Button } from "./button";
import { ButtonImg } from "./ButtonImg";
import { CopiedButton } from "./CopiedButton";

export const CopyButtonWithIcon = React.memo(function CopyButtonWithIcon({ onClick, copied }) {
    return (
        <Button
            variant="ghost"
            onClick={onClick}
            size="icon"
            title="Copy to clipboard"
            className="hover:stroke-black border border-white/10 hover:border-white text-white"
        >
            {copied ? <CopiedButton /> : <ButtonImg />
            }
        </Button>
    );
});
