import { link } from "@tailus/themer"
import React from "react"

export const Link = ({
    size,
    weight,
    align,
    underline,
    children,
    className,
    ...props
}) => {
    return (
        <a className={link({
            size,
            weight,
            align,
            underline,
            class: className
        })} {...props}>
            {children}
        </a>
    )
}

Link.displayName = "Link"
