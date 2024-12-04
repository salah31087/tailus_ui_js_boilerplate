import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cloneElement } from "@lib/utils";

import {
  caption,
  select,
  trigger,
} from "@tailus/themer"

import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";

const SelectGroup = SelectPrimitive.Group;

const SelectContext = React.createContext({});
const { button, separator, itemIndicator, label } = select.soft()

const SelectScrollUpButton = React.forwardRef(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.ScrollUpButton
    {...props}
    ref={forwardedRef}
    className={button({className})}
  >
    {children || <ChevronUp className="size-3"/>}
  </SelectPrimitive.ScrollUpButton>
));

const SelectScrollDownButton = React.forwardRef(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.ScrollDownButton
    {...props}
    ref={forwardedRef}
    className={button({className})}
  >
    {children || <ChevronDown className="size-3"/>}
  </SelectPrimitive.ScrollDownButton>
));

const SelectTrigger = React.forwardRef(({size="md", variant="mixed", className, children, ...props}, forwardedRef) => {
  const { parent } = trigger()
  return (
    <SelectPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={parent({size, variant, className})}
    >
      {children}
    </SelectPrimitive.Trigger>
  )
});

const SelectTriggerIcon = ({ className, size, children }) => {
  const {icon} = trigger()
  return cloneElement(children, icon({size, className}));
};

const SelectContent = React.forwardRef(({ className, variant="solid", intent="primary", mixed=false, fancy=false, children, ...props }, forwardedRef) => {

    const {
      variant: contextVariant,
      intent: contextIntent,
      fancy: contextFancy,
      mixed: contextMixed,
    } = React.useContext(SelectContext);

    variant = variant || contextVariant || "solid";
    intent = intent || contextIntent || "primary";
    fancy = fancy || contextFancy || false;
    mixed = mixed || contextMixed || false;

    if (fancy && mixed) {
      throw new Error('The fancy and mixed props cannot be used together.');
    }
    
    const { content } = select[variant]();

    return (
      <SelectContext.Provider value={{variant, fancy, mixed, intent}}>
        <SelectPrimitive.Content
          {...props}
          ref={forwardedRef}
          className={content({ mixed, fancy, intent, className })}
        >
            {children}
        </SelectPrimitive.Content>
      </SelectContext.Provider>
    ); 
  });

const SelectItemIndicator = React.forwardRef(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.ItemIndicator
    {...props}
    ref={forwardedRef}
    className={itemIndicator({className})}
  />
));

const SelectItem = React.forwardRef(({ className, variant, children, ...props }, forwardedRef) => {

    const {
      variant : contextVariant,
      intent,
    } = React.useContext(SelectContext);

    variant = contextVariant || "solid";

    const { item } = select[variant]();

    return(
      <SelectPrimitive.Item
        {...props}
        ref={forwardedRef}
        className={item({ intent, className })}
      >
        {children}
      </SelectPrimitive.Item>
    )
  });

const SelectLabel = React.forwardRef(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Label
    {...props}
    ref={forwardedRef}
    className={twMerge(caption(), label(), className)}
  />
));

const SelectSeparator = React.forwardRef(({ className, fancy=false, dashed=false, ...props }, forwardedRef) => {

    const {
        fancy : contextFancy,
    } = React.useContext(SelectContext);

    fancy = fancy || contextFancy || false;
    return (
      <SelectPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={separator({ fancy, dashed, className })}
      />
    );
  });


export default {
  Root: SelectPrimitive.Root,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
  Portal: SelectPrimitive.Portal,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  ItemIndicator: SelectItemIndicator,
  ScrollUpButton : SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
  Label: SelectLabel,
  Viewport: SelectPrimitive.Viewport,
  ItemText: SelectPrimitive.ItemText,
  TriggerIcon : SelectTriggerIcon
}
