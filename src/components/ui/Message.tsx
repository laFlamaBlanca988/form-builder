import { styled } from "styled-system/jsx";
import type { ReactNode } from "react";

const BaseMessage = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "16px",
    borderRadius: "md",
    marginTop: "auto",
    fontWeight: "medium",
  },
  variants: {
    status: {
      success: {
        backgroundColor: "success.50",
        color: "success.700",
      },
      error: {
        backgroundColor: "error.50",
        color: "error.700",
      },
      info: {
        backgroundColor: "blue.50",
        color: "blue.700",
      },
      warning: {
        backgroundColor: "yellow.50",
        color: "yellow.800",
      },
    },
  },
});

interface MessageProps {
  type: "success" | "error" | "info" | "warning";
  children: ReactNode;
  icon: ReactNode;
  role?: "alert" | "status";
}

export const Message = ({ type, children, icon, role }: MessageProps) => (
  <BaseMessage status={type} role={role}>
    {icon}
    {children}
  </BaseMessage>
);
