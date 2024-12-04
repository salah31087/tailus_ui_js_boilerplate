import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import {
    form
} from "@tailus/themer"

const Label = React.forwardRef(({ className, size = "md", ...props }, forwardedRef) => {
  
  const { label } = form();
    
  return (
    <LabelPrimitive.Root
      ref={forwardedRef}
      className={label({ size, className })}
      {...props}
    />
    )
});

export default Label;
