import React from 'react';
import {
    form
} from "@tailus/themer"

export const Input = React.forwardRef(({ variant="mixed", fancy=false, className, size="md", ...props }, forwardedRef) => {
    const { input } = form();

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error("Fancy is not supported with the bottomOutlined or plain variant !");
    }

    return (
      <input
        ref={forwardedRef}
        className={input({ variant, fancy, size, className})}
        {...props}
      />
    );
});

export default Input
