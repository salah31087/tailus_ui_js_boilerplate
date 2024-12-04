// Button.jsx

import React from "react";
import { cloneElement } from "../../lib/utils";
import { button, buttonIcon as icon } from "@tailus/themer";

export const Icon = ({
  className,
  children,
  size = "md",
  type = "leading"
}) => {
  return (
    <>
      {
        cloneElement(children, icon({size, type, className}))
      }
    </>
  )
}

export const Label = React.forwardRef(({
  className,
  children,
  ...props
}, forwardedRef) => {
  return (
    <span className={className} {...props} ref={forwardedRef}>{children}</span>
  )
})

export const Root = React.forwardRef((
  {
    className,
    intent = "primary",
    variant = "solid",
    size = "md",
    disabled,
    href,
    children,
    ...props
  }, forwardedRef) => {

    const Component = href ? 'a' : 'button';
    const iconOnly = React.Children.toArray(children).some(child => 
        React.isValidElement(child) && child.type === Icon && child.props.type === 'only'
    );
    const buttonSize = iconOnly ? 'iconOnlyButtonSize' : 'size';

    return (
      <Component 
        ref={forwardedRef} 
        href={href} 
        className={button[variant]({intent, [buttonSize]:size, className})} 
        {...props} 
        disabled={disabled}
      >
        {children}
      </Component>
    )
  });

Root.displayName = 'Root';
Icon.displayName = "Icon";
Label.displayName = "Label";

export default {
  Root: Root,
  Icon: Icon,
  Label: Label
}