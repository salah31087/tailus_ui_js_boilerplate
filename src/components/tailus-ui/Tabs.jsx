import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import {
  tabs,
} from "@tailus/themer";

const {list, trigger, indicator} = tabs();

const TabsContext = React.createContext({
  intent: "primary",
  size: "md",
  triggerVariant: "plain"
});

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, variant="soft", triggerVariant="plain", intent="primary", size="md", ...props }, forwardedRef) => {

  variant = variant || "soft";
    
  return (
    <TabsContext.Provider value={{triggerVariant, intent, size}}>
        <TabsPrimitive.List
          {...props}
          ref={forwardedRef}
          className={list({listVariant:variant, size, triggerVariant, className})}
        />
    </TabsContext.Provider>
  )
});

const TabsTrigger = React.forwardRef(({className, ...props}, forwardedRef) => {

  const { triggerVariant, size, intent } = React.useContext(TabsContext);
    
  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={trigger({triggerVariant, size, intent, className})}
    />
  )
});

const TabsIndicator = React.forwardRef(({ className, variant = "bottom", ...props }, forwardedRef) => {
  
  const { intent } = React.useContext(TabsContext);
    
  return (
    <span
      {...props}
      aria-hidden
      ref={forwardedRef}
      className={indicator({indicatorVariant:variant, intent, className})}
    />
  );
});

const TabsContent = TabsPrimitive.Content;

export default {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}

export {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
}
