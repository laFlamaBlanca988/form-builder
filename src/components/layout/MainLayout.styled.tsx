import { Flex, styled } from "styled-system/jsx";

export const ContentWrapper = styled(Flex, {
  base: {
    width: "100%",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "2rem",
    py: 12,
    maxWidth: "1440px",
    marginX: "auto",

    "@media (max-width: 768px)": {
      flexDirection: "column",
      padding: "0.5rem",
      gap: "1rem",
    },
  },
});

export const PanelWrapper = styled(Flex, {
  base: {
    flex: 1,
    justifyContent: "center",
    minWidth: 0,
  },
});
