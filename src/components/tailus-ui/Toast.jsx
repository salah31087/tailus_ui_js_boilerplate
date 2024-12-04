import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {toast} from "@tailus/themer";

const {root, title, description, viewport} = toast()

const ToastProvider = ToastPrimitive.Provider;
const ToastAction = ToastPrimitive.Action;
const ToastClose = ToastPrimitive.Close;

const ToastRoot = React.forwardRef(({fancy=false, mixed=false, withAction=false, className, ...props}, forwardedRef) => {
  if (mixed && fancy) {
    throw new Error("The properties 'fancy' and 'mixed' cannot be used together.")
  }

  return (
    <ToastPrimitive.Root
      ref={forwardedRef}
      className={root({fancy, mixed, withAction, className})}
      {...props}
    />
  );
});

const ToastTitle = React.forwardRef((props, forwardedRef) => {
  return (
    <ToastPrimitive.Title
      ref={forwardedRef}
      className={title({class:props.className})}
      {...props}
    />
  );
});

const ToastDescription = React.forwardRef((props, forwardedRef) => {
  return (
    <ToastPrimitive.Description
      ref={forwardedRef}
      className={description({class:props.className})}
      {...props}
    />
  );
});

const ToastViewport = React.forwardRef((props, forwardedRef) => {
  return (
    <ToastPrimitive.Viewport
      ref={forwardedRef}
      className={viewport({ class: props.className })}
      {...props}
    />
  );
});

export default {
  Provider: ToastProvider,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Viewport: ToastViewport,
  Action: ToastAction,
  Close: ToastClose,
}

export {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastAction,
  ToastClose,
}
