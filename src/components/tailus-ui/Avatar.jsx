import * as AvatarPrimitive from '@radix-ui/react-avatar';
import React from "react";
import { avatar, fallback, image } from "@tailus/themer";

const AvatarRoot = React.forwardRef(({className, size="md", status="online", bottomStatus=false, topStatus=false, ...props}, ref) => {
  return (
    <AvatarPrimitive.Root
      {...props}
      ref={ref}
      className={avatar({size, status: status && status, topStatus, bottomStatus ,className})}
    />
  );
});

const AvatarFallback = React.forwardRef(({className, variant = "solid", intent="primary", ...props}, ref) => {
  return (
    <AvatarPrimitive.Fallback
      {...props}
      ref={ref}
      className={fallback[variant]({intent, className})}
    />
  );
});

const AvatarImage = React.forwardRef(({className, ...props}, ref) => {
  return (
    <AvatarPrimitive.Image
      {...props}
      ref={ref}
      className={image({className})}
    />
  );
});

export default {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
}

export {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
}