import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import Button from "@tailus-ui/Button";
import {
  dialog,
  title,
  text
} from "@tailus/themer"

const DialogRoot = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, forwardedRef) => {
    const { overlay } = dialog()

    return (
      <DialogPrimitive.Overlay
          {...props}
          ref={forwardedRef}
          className={overlay({ className })}
      />
    )
  });

const DialogContent = React.forwardRef(({ className, fancy, mixed, ...props }, forwardedRef) => {
    const { content } = dialog()
    
    if (fancy && mixed) {
      throw new Error('The fancy and mixed props cannot be used together.');
    }
    
    return(
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={content({ fancy, mixed, className })}
      />
    )
  });

const DialogTitle = React.forwardRef(({className, size="base", align, weight="medium", ...props}, forwardedRef) => (
  <DialogPrimitive.Title
    {...props}
    ref={forwardedRef}
    className={
      title({
        size,
        align,
        weight,
        className
      })
    }
  />
));

const DialogDescription = React.forwardRef(({className, size, weight, align, neutral, ...props}, forwardedRef) => (
  <DialogPrimitive.Description
    {...props}
    ref={forwardedRef}
    className={
      text({
        size,
        weight,
        align,
        neutral,
        className
      })
    }
  />
));

const DialogActions = React.forwardRef(({ className, ...props }, forwardedRef) => {
      const { actions } = dialog()
    return (
      <div
        {...props}
        ref={forwardedRef}
        className={actions({className})}
        />
      )
  });

const DialogCloseButton = ({ className, ...props }) => {
  const { close } = dialog()

  return(
    <Button.Root
        {...props}
        className={close({ className })}
        variant="ghost"
        size="sm"
    >
      <Button.Icon type="only" size="xs">
        {props.children}
      </Button.Icon>
    </Button.Root>
  )
};

export default {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Actions: DialogActions,
  CloseButton: DialogCloseButton,
  Close: DialogClose,
}

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogCloseButton,
  DialogClose,
}
