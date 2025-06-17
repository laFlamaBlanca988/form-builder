import * as Dialog from "@radix-ui/react-dialog";
import { Flex } from "styled-system/jsx";
import Button from "@/components/ui/Button";
import { FiCode, FiSave, FiX } from "react-icons/fi";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  json: string;
  onCopy: () => void;
  onDownload: () => void;
};

export const ExportDialog = ({
  open,
  onOpenChange,
  json,
  onCopy,
  onDownload,
}: Props) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          inset: 0,
          zIndex: 50,
        }}
      />
      <Dialog.Content
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          color: "black",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          maxWidth: "500px",
          maxHeight: "85vh",
          padding: "25px",
          zIndex: 51,
          overflow: "auto",
        }}
      >
        <Dialog.Title
          style={{
            marginBottom: "15px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Export Form Configuration
        </Dialog.Title>

        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "4px",
            overflow: "auto",
            maxHeight: "300px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          {json}
        </pre>

        <Flex gap="3" justify="flex-end">
          <Button onClick={onCopy}>
            <FiCode /> Copy JSON
          </Button>
          <Button onClick={onDownload}>
            <FiSave /> Download
          </Button>
          <Dialog.Close asChild>
            <Button>
              <FiX /> Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
