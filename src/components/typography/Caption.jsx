import { caption } from "@tailus/themer"
import React from "react"

export const Caption = ({
    size,
    as="p",
    weight,
    align,
    neutral,
    children,
    className,
    ...props
}) => {
    const CaptionElement = as

    if (as === "strong") {
        weight = weight || "medium"
        neutral = neutral || true
    } else if (as === "em") {
        neutral = neutral || true
    }
    
    return (
        <CaptionElement className={caption({
            size,
            weight,
            align,
            neutral,
            class: className
        })} {...props}>
            {children}
        </CaptionElement>
    )
}

Caption.displayName = "Caption"
