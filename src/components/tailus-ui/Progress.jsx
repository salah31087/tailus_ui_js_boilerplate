import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { progress } from "@tailus/themer";

const { root, indicator } = progress();

const ProgressRoot = React.forwardRef(({ className, size="md", variant="soft", ...props}, forwardedRef) => {

    return(
      <ProgressPrimitive.Root
        {...props}
        ref={forwardedRef}
        className={root({size, variant, className})}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
      />
    )
});

const ProgressIndicator = React.forwardRef(({
    className,
    intent = "primary",
    indeterminate = "gray",
    withHighlight = false,
    innerShadow = false,
    loading = "primary",
    complete = "success",
    withStripes = false,
    ...props
  }, forwardedRef) => {

    if (withHighlight && withStripes) {
      throw new Error("The highlight and stripes styles cannot be applied together!")
    }

    return (
      <ProgressPrimitive.Indicator
        {...props}
        ref={forwardedRef}
        className={indicator({
          intent,
          indeterminate,
          complete,
          withStripes,
          loading,
          withHighlight,
          innerShadow,
          className
        })}
      />
    )
});

const Progress = {
  Root: ProgressRoot,
  Indicator: ProgressIndicator,
}

export default Progress;

export {
  ProgressIndicator,
  ProgressRoot,
}
