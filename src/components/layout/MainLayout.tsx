import { VStack } from "../../../styled-system/jsx";
import { BuilderPanel } from "@/components/builder/BuilderPanel";
import { LivePreviewPanel } from "@/components/preview/LivePreviewPanel";
import { Header } from "@/components/shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContentWrapper, PanelWrapper } from "./MainLayout.styled";

export function MainLayout() {
  return (
    <VStack width="100%" height="100dvh" gap="0">
      <Header />
      <ContentWrapper>
        <PanelWrapper>
          <BuilderPanel />
        </PanelWrapper>
        <PanelWrapper>
          <LivePreviewPanel />
        </PanelWrapper>
      </ContentWrapper>
      <ToastContainer position="bottom-right" />
    </VStack>
  );
}
