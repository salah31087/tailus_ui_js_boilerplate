import { separator } from "@tailus/themer";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";
  
const SeparatorRoot = React.forwardRef(({ fancy, dashed, className, ...props }, ref) => {
    
  if (fancy && dashed) throw new Error("A separator cannot be both fancy and dashed");

  return (
    <SeparatorPrimitive.Root
      className={separator({fancy, dashed, orientation:props.orientation, className})}
      {...props}
      ref={ref}
    />
  );
});

SeparatorRoot.displayName = "Separator";
export default SeparatorRoot;
