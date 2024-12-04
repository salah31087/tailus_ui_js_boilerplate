import {Root} from "@radix-ui/react-toggle";
import React from "react";
import { cloneElement } from "@lib/utils";
import { toggle } from "@tailus/themer";

const {root, icon} = toggle();

const ToggleRoot = React.forwardRef(({
    className,
    variant = "soft",
    size = "md",
    intent = "primary",
    withLabel = false,
    ...props
  },
  forwardedRef
) => {
  return (
    <Root
      className={root({variant, size, withLabel, intent, className})}
      ref={forwardedRef}
      {...props}
    />
  )
});

const ToggleIcon = ({className, size, children}) => {
  return cloneElement(children, icon({size, className}));
};

export default {
  Root: ToggleRoot,
  Icon: ToggleIcon,
}

export {
  ToggleRoot,
  ToggleIcon,
};
