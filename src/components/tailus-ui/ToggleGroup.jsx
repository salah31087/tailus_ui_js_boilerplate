import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import React, { createContext, useContext } from "react";
import { cloneElement } from "@lib/utils";
import { toggle } from "@tailus/themer";

const {group, root: item, icon } = toggle();

const RootContext = createContext({
  variant: "soft",
  intent: "primary",
  size: "md"
});

const ToggleGroupRoot = React.forwardRef((
  {
    className,
    variant="soft",
    intent="primary",
    size="md",
    ...props
  }, forwardedRef
) => {
  return (
    <RootContext.Provider value={{variant, intent, size}}>
      <ToggleGroupPrimitive.Root className={group({size, className})} ref={forwardedRef} {...props} />
    </RootContext.Provider>
  );
});

const ToggleGroupItem = React.forwardRef((
  {
    className,
    variant,
    intent,
    size,
    withLabel,
    ...props
  }, forwardedRef
) => {
  const {
    variant: rootVariant,
    intent: rootIntent,
    size: rootSize
  } = useContext(RootContext);

  variant = variant || rootVariant;
  intent = intent || rootIntent;
  size = size || rootSize;

  return (
    <ToggleGroupPrimitive.Item
      className={item({variant, intent, size, withLabel, className})} ref={forwardedRef} {...props}
    />
  );
});

const ToggleGroupIcon = ({className, children, size}) => {
  const { size: rootSize } = useContext(RootContext);
  size = size || rootSize;
  return cloneElement(children, icon({size, className}));
};

export default {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
  Icon: ToggleGroupIcon,
}

export {
  ToggleGroupRoot,
  ToggleGroupItem,
  ToggleGroupIcon,
};
