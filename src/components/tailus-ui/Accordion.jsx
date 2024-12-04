import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordion } from "@tailus/themer";

const defaultContextValue = {variant: "default", fancy: true};
const Context = React.createContext(defaultContextValue);

const AccordionRoot = React.forwardRef(({ className, variant, fancy, ...props }, forwardedRef) => {
  const { root } = accordion({variant});
  return (
    <Context.Provider value={{variant, fancy} || defaultContextValue}>
      <AccordionPrimitive.Root
        className={root({className})}
        {...props}
        ref={forwardedRef}
      />
    </Context.Provider>
  )
});

const AccordionItem = React.forwardRef(({ className, fancy, ...props }, forwardedRef) => {
  
  const { variant, fancy: contextFancy } = React.useContext(Context);
  const { item } = accordion({ variant }) 

  fancy = fancy || contextFancy;

  if (variant === "soft" && fancy) {
    throw new Error("The fancy style cannot be applied with the 'soft' variant !")
  } 

  return (
    <AccordionPrimitive.Item
      className={item({fancy, className})}
      {...props}
      ref={forwardedRef}
    />
  )
});

const AccordionTrigger = React.forwardRef(({className, children, ...props}, forwardedRef) => {
  const {variant} = React.useContext(Context);
  const {header, trigger, triggerIcon, triggerContent} = accordion({variant})

  return (
    <AccordionPrimitive.Header className={header({className})}>
      <AccordionPrimitive.Trigger
        className={trigger({className})}
        {...props}
        ref={forwardedRef}
      >
        <div className={triggerContent({className})}>
          {children}
        </div>
        <ChevronDownIcon className={triggerIcon({className})} aria-hidden={true}/>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
});

const AccordionContent = React.forwardRef(({className, children, ...props}, forwardedRef) => {
  const {variant} = React.useContext(Context);
  const { content } = accordion({variant})

  return (
    <AccordionPrimitive.Content
      className={content({className})}
      {...props}
      ref={forwardedRef}
    >
      <div>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
});

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent
}

export default Accordion;
