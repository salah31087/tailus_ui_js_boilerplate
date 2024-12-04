import { code } from "@tailus/themer"
import React from "react"

export const Code = ({
    children,
    className,
    ...props
}) => {
    return (
        <code className={code({
            class: className
        })} {...props}>
            {children}
        </code>
    )
}

Code.displayName = "Code"
