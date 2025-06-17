import { styled, Box } from "styled-system/jsx";
import React from "react";

const StyledLabel = styled("label", {
  base: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    cursor: "pointer",
    color: "gray.700",
    fontWeight: "medium",
  },
});

const StyledCheckbox = styled("input", {
  base: {
    w: 6,
    h: 6,
    rounded: "sm",
    border: "1px solid token(colors.inputBorder)",
    cursor: "pointer",
    bg: "white",
    appearance: "none",
    position: "relative",

    _focus: {
      boxShadow: "0 0 0 2px token(colors.primary.100)",
    },

    _checked: {
      bg: "primary.500",
      borderColor: "primary.500",
      _after: {
        content: '""',
        position: "absolute",
        top: "10px",
        left: "50%",
        width: "6px",
        height: "12px",
        border: "solid white",
        borderWidth: "0 2px 2px 0",
        transform: "translate(-50%, -50%) rotate(45deg)",
      },
    },
  },
  variants: {
    state: {
      default: {},
      error: {
        borderColor: "error.500",
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});
const RequiredMark = styled("span", {
  base: {
    color: "error.500",
    ml: 1,
  },
});
interface CheckboxFieldProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  error?: string;
}

export function CheckboxField({
  id,
  checked,
  onChange,
  label,
  required,
  error,
}: CheckboxFieldProps) {
  return (
    <Box>
      {required && <RequiredMark>*</RequiredMark>}
      <StyledLabel htmlFor={id}>
        <StyledCheckbox
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          state={error ? "error" : "default"}
        />
        {label}
      </StyledLabel>
      {error && (
        <div
          style={{
            color: "var(--colors-error-500)",
            fontSize: "14px",
            marginTop: "4px",
          }}
        >
          {error}
        </div>
      )}
    </Box>
  );
}
