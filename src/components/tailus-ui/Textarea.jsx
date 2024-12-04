import React from 'react';
import { twMerge } from 'tailwind-merge';
import { form } from "@tailus/themer"

const Textarea = React.forwardRef(({ className, variant="mixed", fancy=false, size="md", ...props }, forwardedRef) => {
  const { input, textarea } = form();

  if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
    throw Error("Fancy is not supported with the bottomOutlined or plain variant !");
  }
  
  return (
    <textarea
      ref={forwardedRef}
      className={input({ variant, fancy, size, class:twMerge(textarea(), className)})}
      {...props}
    />
  )
});

export default Textarea;
