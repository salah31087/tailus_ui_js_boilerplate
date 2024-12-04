import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";
import { createContext, useContext } from "react";
import { slider } from "@tailus/themer";

const SliderContext = createContext({})

const SliderRoot = React.forwardRef(({ intent="primary", size="md", className, ...props }, forwardedRef) => {
    const { root } = slider()
    return (
      <SliderContext.Provider value={{intent, size}}>
        <SliderPrimitive.Root
          {...props}
          ref={forwardedRef}
          className={root({ size, intent, className})}
        />
      </SliderContext.Provider>
    )
});

const SliderThumb = React.forwardRef(({ variant="raised", size="md", className, ...props }, forwardedRef) => {

    const { thumb } = slider()

    const { intent, size: contextSize, variant: contextVariant } = useContext(SliderContext)
    
    size = size || contextSize
    variant = variant || contextVariant
    return (
      <SliderPrimitive.SliderThumb
        {...props}
        ref={forwardedRef}
        className={thumb({ variant, size, intent, className})}
      />
    )
  });

const SliderTrack = React.forwardRef(({ className, variant="soft", ...props }, forwardedRef) => {

    const { track } = slider()

    return (
      <SliderPrimitive.Track
        {...props}
        ref={forwardedRef}
        className={track({trackVariant:variant, className })}
      />
    )
});

const SliderRange = React.forwardRef(({ intent, className, ...props }, forwardedRef) => {

    const { range } = slider()
    const { intent: contextIntent } = useContext(SliderContext)
    
    intent = intent || contextIntent

    return (
      <SliderPrimitive.Range
        {...props}
        ref={forwardedRef}
        className={range({ intent, className})}
      />
    )
  });

const Slider = {
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Range: SliderRange,
};

export default Slider;

export {
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderRange,
}
