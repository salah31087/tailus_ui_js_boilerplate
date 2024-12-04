import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import React from "react";
import {
  menu,
  menuSeparator as separator,
  defaultMenuProps,
} from "@tailus/themer"

const MenuContext = React.createContext(defaultMenuProps);

const ContextMenuRoot = ContextMenuPrimitive.Root;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuLabel = ContextMenuPrimitive.Label;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuCheckboxItem = ContextMenuPrimitive.CheckboxItem;
const ContextMenuItemIndicator = ContextMenuPrimitive.ItemIndicator;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuRadioItem = ContextMenuPrimitive.RadioItem;
const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuTrigger = React.forwardRef((props, forwardedRef) => {
    const {trigger} = menu.solid({intent:"primary"});
  return (
    <ContextMenuPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={trigger({className: props.className})}
    />
  )
});

const ContextMenuContent = React.forwardRef(({ className, variant, intent, mixed, fancy, ...props }, forwardedRef) => {
    
  const {
    variant: contextVariant,
    intent: contextIntent,
    mixed: contextMixed,
    fancy: contextFancy,
  } = React.useContext(MenuContext);

  variant = variant || contextVariant || "soft";
  intent = intent || contextIntent;
  fancy = fancy || contextFancy;
  mixed = mixed || contextMixed;
    
  if (fancy && mixed) throw new Error('The fancy and mixed props cannot be used together.');

  const contextValues = { variant, intent, fancy, mixed };
  const { content } = menu[variant]();
    
  return (
    <MenuContext.Provider value={contextValues}>
      <ContextMenuPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={content({fancy, mixed, className})}
      />
    </MenuContext.Provider>
  );
});

const ContextMenuItem = React.forwardRef((
  {
    className,
    intent,
    variant,
    ...props
  }, forwardedRef
) => {
  const {
    variant: contextVariant,
    intent: contextIntent
  } = React.useContext(MenuContext);

  variant = variant || contextVariant || "soft";
  intent = intent || contextIntent;

  const { item } = menu[variant]({intent});

  return (
    <ContextMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={item({intent, className})}
    />
  );
});

const ContextMenuSubTrigger = React.forwardRef((
  {
    className,
    intent,
    variant,
    ...props
  }, forwardedRef
) => {
  const {
    variant: contextVariant,
    intent: contextIntent
  } = React.useContext(MenuContext);

  variant = variant || contextVariant || "soft";
  intent = intent || contextIntent;

  const { subTrigger } = menu[variant]({intent});
  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={subTrigger({intent, className})}
    />
  );
});

const ContextMenuSubContent = React.forwardRef((
  {
    className,
    variant = "soft",
    intent = "gray",
    mixed,
    fancy,
    ...props
  }, forwardedRef
) => {
  const { variant: contextVariant, fancy: contextFancy, mixed: contextMixed } = React.useContext(MenuContext);
  
  variant = variant || contextVariant || "soft";
  fancy = fancy || contextFancy;
  mixed = mixed || contextMixed;
  const { content } = menu[variant]({ intent });
  
  if (fancy && mixed) throw new Error('The fancy and mixed props cannot be used together.');
  
  return (
    <ContextMenuPrimitive.SubContent
      {...props}
      ref={forwardedRef}
      className={content({mixed, fancy, intent, className})}
    />
  );
});

const ContextMenuSeparator = React.forwardRef(({className, fancy, dashed, ...props}, forwardedRef) => {
  const {fancy: contextVariant} = React.useContext(MenuContext);
  fancy = fancy || contextVariant;

  if (fancy && dashed) throw new Error('A separator cannot be both fancy and dashed.');

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={separator({fancy, dashed, className})}
    />
  );
});

const ContextMenuCommand = React.forwardRef(({className, ...props}, forwardedRef) => {
  const { command } = menu.solid({});
  return (
    <div
      {...props}
      ref={forwardedRef}
      className={command({className})}
    />
  );
});

const ContextMenuIcon = React.forwardRef(({className, ...props}, forwardedRef) => {
  const { icon } = menu.solid({});
  return (
    <div
      {...props}
      ref={forwardedRef}
      className={icon({className})}
    />
  );
});

export default {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Content: ContextMenuContent,
  Label: ContextMenuLabel,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  CheckboxItem: ContextMenuCheckboxItem,
  ItemIndicator: ContextMenuItemIndicator,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Separator: ContextMenuSeparator,
  Command: ContextMenuCommand,
  Icon: ContextMenuIcon,
}

export {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuCheckboxItem,
  ContextMenuItemIndicator,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuSeparator,
  ContextMenuCommand,
  ContextMenuIcon,
}
