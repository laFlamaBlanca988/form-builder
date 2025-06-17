import { styled } from "../../../styled-system/jsx";
import type { ReactNode } from "react";

const baseHeadingStyle = {
  base: {
    fontFamily: "inherit",
    color: "gray.900",
    fontWeight: "bold",
    lineHeight: "1.2",
    m: 0,
  },
  variants: {
    size: {
      xs: { fontSize: "sm" },
      sm: { fontSize: "md" },
      md: { fontSize: "lg" },
      lg: { fontSize: "xl" },
      xl: { fontSize: "2xl" },
      "2xl": { fontSize: "3xl" },
    },
    variant: {
      default: {},
      primary: { color: "text" },
      gradient: {
        bgGradient: "linear(to-r, primary.500, accent.500)",
        bgClip: "text",
        textFillColor: "transparent",
      },
    },
  },
};

const H1 = styled("h1", {
  ...baseHeadingStyle,
  defaultVariants: { size: "lg", variant: "default" },
});
const H2 = styled("h2", {
  ...baseHeadingStyle,
  defaultVariants: { size: "lg", variant: "default" },
});
const H3 = styled("h3", {
  ...baseHeadingStyle,
  defaultVariants: { size: "md", variant: "default" },
});
const H4 = styled("h4", {
  ...baseHeadingStyle,
  defaultVariants: { size: "sm", variant: "default" },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface BaseHeadingProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "primary" | "gradient";
  className?: string;
  level?: HeadingLevel;
}

export function Heading({
  level = "h1",
  children,
  size,
  variant,
  ...props
}: BaseHeadingProps) {
  const headingProps = { size, variant, ...props };

  switch (level) {
    case "h1":
      return <H1 {...headingProps}>{children}</H1>;
    case "h2":
      return <H2 {...headingProps}>{children}</H2>;
    case "h3":
      return <H3 {...headingProps}>{children}</H3>;
    case "h4":
      return <H4 {...headingProps}>{children}</H4>;
    default:
      return <H1 {...headingProps}>{children}</H1>;
  }
}

export { H1, H2, H3, H4 };
