import * as Switch from "@radix-ui/react-switch";
import React, { useContext } from "react";
import {switchTheme, fancySwitch} from "@tailus/themer";

const SwitchContext = React.createContext({ intent: "primary", fancy: false})

const SwitchRoot = React.forwardRef(({ className, intent="primary", fancy=false, ...props }, forwardedRef) => {
  const { root } = fancy ? fancySwitch({intent}) : switchTheme({intent});
  return (
    <SwitchContext.Provider value={{ intent }}>
      <Switch.Root className={root({intent, className })} {...props} ref={forwardedRef} />
    </SwitchContext.Provider>
  )
});

const SwitchThumb = React.forwardRef(({ className, ...props }, forwardedRef) => {
  const { intent } = useContext(SwitchContext)
  const { thumb } = switchTheme({ intent });
  return (
    <Switch.Thumb className={thumb({intent, className })} {...props} ref={forwardedRef} />
  )
});

export {
  SwitchRoot,
  SwitchThumb,
};

export default {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
}