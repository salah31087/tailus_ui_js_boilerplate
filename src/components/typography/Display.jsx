import { display } from "@tailus/themer"
import React from "react"

export const Display = ({
    as = "h1",
    size,
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const DisplayElement = as
    
    return (
        <DisplayElement className={display({
            size,
            weight,
            align,
            class: className
        })} {...props}>
            {children}
        </DisplayElement>
    )
}

Display.displayName = "Display"
