import { styled } from "styled-system/jsx";

export const PanelContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    pt: 6,
    width: "100%",
    height: "100%",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "lg",
    overflow: "hidden",
    bg: "white",
  },
});

export const ContentContainer = styled("div", {
  base: {
    display: "flex",
    flexGrow: 1,
    pt: 4,
    overflow: "hidden",
  },
});

const BasePanel = styled("div", {
  base: {
    p: 4,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    bg: "gray.50",
  },
});

export const LeftPanel = styled(BasePanel, {
  base: {
    overflow: "hidden",
    pr: 2,
  },
});

export const RightPanel = styled(BasePanel, {
  base: {
    gap: 4,
    overflow: "auto",
    pl: 2,
  },
});

export const ScrollableArea = styled("div", {
  base: {
    overflowY: "auto",
    overflowX: "hidden",
    py: 4,
    flexGrow: 1,
  },
});

export const EmptyState = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    m: 4,
    mt: 4,
    height: "200px",
    borderRadius: "md",
    border: "2px dashed",
    borderColor: "gray.200",
    color: "gray.500",
    textAlign: "center",
  },
});
export const FormTitle = styled("div", {
  base: {
    marginBottom: "24px",
    textAlign: "center",
  },
});
