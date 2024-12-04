import { kbd } from "@tailus/themer"
import React from "react"

export const Kbd = ({
    children,
    className,
    ...props
}) => {
    return (
        <kbd className={kbd({
            class: className
        })} {...props}>
            {children}
        </kbd>
    )
}

Kbd.displayName = "Kbd"
