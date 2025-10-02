import { Button } from "@/components/ui/button";
import React from "react";

export const EncryptDecryptButton = React.memo(function EncryptDecryptButton({
    onClick,
    label
}) {
    return (
        <Button
            variant="ghost"
            onClick={onClick}
            className="text-white border border-white/10"
        >
            {label}
        </Button>
    );
});
