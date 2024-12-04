import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import { useContext } from "react";
import { radio, fancyRadio } from "@tailus/themer";

const RadioGroupContext = React.createContext({fancy: false, intent: "primary"});

const RadioGroupRoot = React.forwardRef(({ className, intent, fancy, ...props }, forwardedRef) => {
  
    return (
      <RadioGroupContext.Provider value={{fancy, intent}}>
        <RadioGroupPrimitive.Root
          {...props}
          ref={forwardedRef}
          className={className}
        />
      </RadioGroupContext.Provider>
    )
  });

const RadioGroupItem = React.forwardRef((props, forwardedRef) => {
    const {intent, fancy} = useContext(RadioGroupContext);
    const {item} = fancy ? fancyRadio({intent}) : radio({intent});
    return (
        <RadioGroupPrimitive.Item
          {...props}
          ref={forwardedRef}
          className={item({className: props.className})}
        />
    )
});

const RadioGroupIndicator = React.forwardRef((props, forwardedRef) => {
    const {intent} = useContext(RadioGroupContext);
    const {indicator} = radio({intent});
    return (
      <RadioGroupPrimitive.Indicator
        {...props}
        ref={forwardedRef}
        className={indicator({intent:props.intent, className: props.className})}
      />
    )
});

export default {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
}

export {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
}
