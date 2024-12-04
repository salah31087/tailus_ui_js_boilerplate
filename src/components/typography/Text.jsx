import { text } from "@tailus/themer"
import React from "react"

export const Text = ({
    as = "p",
    size,
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const TextElement = as

    if (as === "strong") {
        weight = weight || "medium"
    }
    
    return (
        <TextElement className={text({
            size,
            weight,
            align,
            class: className
        })} {...props}>
            {children}
        </TextElement>
    )
}

Text.displayName = "Text"
