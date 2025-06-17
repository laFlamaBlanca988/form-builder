import { styled } from "styled-system/jsx";

export const TypeSelectorContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    p: 4,
    bg: "gray.50",
  },
});

export const TypesGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 3,
  },
});

export const TypeCard = styled("button", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    p: 3,
    borderRadius: "md",
    bg: "white",
    border: "1px solid",
    borderColor: "gray.200",
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "center",
    fontSize: "sm",
    color: "gray.700",
    fontWeight: "medium",
    _hover: {
      borderColor: "primary.300",
      bg: "primary.50",
      transform: "translateY(-2px)",
      shadow: "sm",
    },
  },
});

export const IconWrapper = styled("div", {
  base: {
    fontSize: "xl",
    color: "primary.500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "primary.50",
    p: 3,
    borderRadius: "full",
    mb: 1,
  },
});
