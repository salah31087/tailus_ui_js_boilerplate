import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";
import { popover } from "@tailus/themer";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverPortal = PopoverPrimitive.Portal;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = React.forwardRef(({ className, mixed, fancy, ...props }, forwardedRef) => {
  const { content } = popover();

  if (fancy && mixed) {
    throw new Error('The fancy and mixed props cannot be used together.');
  }

  return (
    <PopoverPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={content({ mixed, fancy, className })}
    />
  );
});

export default {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Close: PopoverClose,
};

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
};
