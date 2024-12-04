import { Drawer as Primitive } from "vaul"
import React from "react";
import { drawer } from "@tailus/themer"
import {
  title,
  text
} from "@tailus/themer"

const Trigger = Primitive.Trigger;
const Portal = Primitive.Portal;
const Close = Primitive.Close;
const NestedRoot = Primitive.NestedRoot;

const DirectionContext = React.createContext({ direction: "bottom", withControler:true });

const Root = ({ direction, withControler, ...props }, forwardedRef) => {
    return (
        <DirectionContext.Provider value={{ direction, withControler }}>
            <Primitive.Root ref={forwardedRef} direction={direction} {...props} />
        </DirectionContext.Provider>
    );
};

const Content = React.forwardRef(({
        className,
        fancy,
        mixed,
        ...props
    }, forwardedRef) => {

        const { content } = drawer()
        const {direction, withControler} = React.useContext(DirectionContext);

        if (fancy && mixed) {
            throw new Error('The fancy and mixed props cannot be used together.');
        } 

        return (
            <Primitive.Content {...props} ref={forwardedRef}
                className = {content({fancy,mixed,direction,withControler,className})}
            />
        )
    }
);

const Overlay = React.forwardRef(({ className, ...props }, forwardedRef) => {
    
    const { overlay } = drawer()

    return (
      <Primitive.Overlay
          {...props}
          ref={forwardedRef}
          className={overlay({ className })}
      />
    )
  });

const Title = React.forwardRef(({className, size="base", align, weight="medium", ...props}, forwardedRef) => (
  <Primitive.Title
    {...props}
    ref={forwardedRef}
    className={title({ size, align, weight, className })}
  />
));

const Description = React.forwardRef(({className, size, weight, align, neutral, ...props}, forwardedRef) => (
  <Primitive.Description
    {...props}
    ref={forwardedRef}
    className={text({ size, weight, align, neutral, className })}
  />
));

export default {
    Root,
    NestedRoot,
    Trigger,
    Portal,
    Close,
    Content,
    Overlay,
    Title,
    Description,
};

export {
    Root,
    Trigger,
    NestedRoot,
    Portal,
    Close,
    Content,
    Overlay,
    Title,
    Description,
};
