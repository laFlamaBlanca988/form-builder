import { styled } from "styled-system/jsx";

export const FieldCard = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    p: 3,
    mb: 2,
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
    bg: "white",
    transition: "all 0.2s ease",
    _hover: {
      borderColor: "primary.300",
    },
  },
  variants: {
    selected: {
      true: {
        borderColor: "primary.500",
        borderWidth: "2px",
        bg: "primary.50",
        boxShadow: "0 0 0 1px token(colors.primary.300)",
      },
    },
    dragging: {
      true: {
        opacity: 0.5,
        bg: "gray.50",
      },
    },
  },
});

export const DragHandle = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    cursor: "grab",
    color: "gray.400",
    marginRight: 3,
    _hover: {
      color: "gray.600",
    },
  },
});

export const FieldContent = styled("div", {
  base: {
    flex: 1,
    color: "gray.700",
    display: "flex",
    flexDirection: "column",
    cursor: "default",
  },
});

export const FieldLabel = styled("div", {
  base: {
    fontWeight: "medium",
  },
});

export const FieldType = styled("div", {
  base: {
    fontSize: "xs",
    color: "gray.500",
    mt: 0.5,
  },
});

export const IconButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
    border: "none",
    bg: "transparent",
    borderRadius: "md",
    cursor: "pointer",
    color: "gray.500",
    transition: "all 0.2s",
    _hover: {
      bg: "gray.100",
      color: "gray.700",
    },
  },
  variants: {
    danger: {
      true: {
        _hover: {
          bg: "error.50",
          color: "error.600",
        },
      },
    },
  },
});
