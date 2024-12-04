import { title } from "@tailus/themer"
import React from "react"

export const Title = ({
    as = "h2",
    size,
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const TitleElement = as
    
    return (
        <TitleElement className={title({
            size,
            weight,
            align,
            class: className
        })} {...props}>
            {children}
        </TitleElement>
    )
}

Title.displayName = "Title"
