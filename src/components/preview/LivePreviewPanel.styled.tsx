import { styled } from "styled-system/jsx";

export const PreviewContainer = styled("div", {
  base: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    py: 6,
    px: 4,
    border: "1px solid",
    borderColor: "border",
    borderRadius: "lg",
    overflow: "hidden",
    bg: "white",
  },
});

export const FormTitle = styled("div", {
  base: {
    marginBottom: "24px",
    textAlign: "center",
  },
});

export const SubmitContainer = styled("div", {
  base: {
    mt: "auto",
    mb: 8,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});
