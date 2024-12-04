import { banner } from "@tailus/themer";
import React, { cloneElement } from "react";

export const Root = React.forwardRef(
    ({ className, intent = "info", ...props }, ref) => {
        const { root } = banner();
        return (
            <div
                ref={ref}
                role="banner"
                aria-label={`${intent} banner`}
                className={root({ intent, className})}
                {...props}
            />
        )
    }
);

export const Content = React.forwardRef(
    ({ className, ...props }, ref) => {
        const { content } = banner();
        return (
            <div
                ref={ref}
                className={content({ className })}
                {...props}
            />
        )
    }
);

export const Icon = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        const { icon } = banner();
        return (
            cloneElement(children, {className: icon({ className }), ref:ref, ...props})
        )
    }
);

export default {
    Root,
    Content,
    Icon,
}
