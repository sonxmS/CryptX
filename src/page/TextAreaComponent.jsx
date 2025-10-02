import React from "react";
import { Textarea } from "../components/ui/textarea";

export const TextareaComponent = React.memo(React.forwardRef(function TextareaComponent(
    {
        id,
        value,
        onChange,
        disabled,
        placeholder,
        title,
        className
    },ref
) {
    console.log("TEXTAREA RERENDERED");
    return (
        <Textarea
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            title={title}
            className={className}
            ref={ref}
        />
    )
}))