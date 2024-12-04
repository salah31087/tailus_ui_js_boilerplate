import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React, {forwardRef} from "react";
import { checkbox, fancyCheckbox } from "@tailus/themer"

const CheckboxRoot = forwardRef(({ className, intent, fancy, ...props }, forwardedRef) => {
    const classes = fancy ? fancyCheckbox({ intent, className }) : checkbox({ intent, className });
    return(
      <CheckboxPrimitive.Root
        ref={forwardedRef}
        className={classes}
        {...props}
      />
    )
});

const CheckboxIndicator = CheckboxPrimitive.Indicator;

export {
  CheckboxRoot,
  CheckboxIndicator,
};

export default {
  Root: CheckboxRoot,
  Indicator : CheckboxIndicator
}
