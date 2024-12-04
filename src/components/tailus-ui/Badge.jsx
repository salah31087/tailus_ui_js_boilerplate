import { badge } from "@tailus/themer"

export const Badge = ({
    className,
    children,
    intent = "primary", 
    size = "md",
    variant = "soft",
    ...props
  }) => {
    return(
        <span className={badge[variant]({intent, size, className})} {...props}>
            {children}
        </span>
    )
}
  
Badge.displayName = "Badge";
export default Badge;
