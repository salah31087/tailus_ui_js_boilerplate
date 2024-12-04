import { list, listItem } from "@tailus/themer"
import React from "react"

export const List = ({
    as = "ul",
    size,
    weight,
    align,
    marker,
    children,
    className,
    ...props
}) => {
    const ListElement = as
    return (
        <ListElement className={list({
            size,
            weight,
            align,
            marker,
            class: className
        })} {...props}>
            {children}
        </ListElement>
    )
}

export const ListItem = ({
    children,
    className,
    ...props
}) => {
    return (
        <li className={listItem({
            class: className
        })} {...props}>
            {children}
        </li>
    )
}

List.displayName = "List"
ListItem.displayName = "ListItem"
