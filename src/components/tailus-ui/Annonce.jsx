import React from "react";
import { annonceRoot, annonceConcern } from "@tailus/themer";

export const AnnonceRoot = ({
  className,
  href,
  variant = "outlined",
  size = "md",
  children,
  ...props
}) => {
  const Component = href ? "a" : "div";

  return (
    <Component 
      href={href} 
      className={annonceRoot({variant, size, className})} 
      {...props}
    >
      {children}
    </Component>
  );
};

export const AnnonceConcern = ({
  className,
  intent = 'primary',
  size = 'md',
  children,
  ...props 
}) => (
  <span 
    className={annonceConcern({intent, size, className})} 
    {...props}
  >
    {children}
  </span>
);

export const AnnonceMessage = ({
  className,
  children,
  ...props
}) => (
  <p 
    className={className} 
    {...props}
  >
    {children}
  </p>
);

export default {
  Root: AnnonceRoot,
  Concern: AnnonceConcern,
  Message: AnnonceMessage,
}