import { Box, Flex } from "styled-system/jsx";
import { H1 } from "../ui/Heading";
import Button from "@/components/ui/Button";
import { BiRedo, BiReset, BiUndo } from "react-icons/bi";
import { FiSave, FiUpload } from "react-icons/fi";
import { useHeaderActions } from "@/hooks/useHeaderActions";
import { ExportDialog } from "../ui/ExportDialog";

export const Header = () => {
  const {
    fileInputRef,
    isExportOpen,
    setIsExportOpen,
    exportedJson,
    exportIsDisabled,
    handleImportClick,
    handleFileChange,
    handleExport,
    handleDownload,
    copyToClipboard,
    undo,
    redo,
    reset,
  } = useHeaderActions();

  return (
    <Box
      py="4"
      px="6"
      borderBottom="1px solid"
      borderColor="gray.200"
      width="100%"
    >
      <Flex justify="space-between" align="center">
        <H1 size="2xl" color="primary.500">
          FBUILDER
        </H1>

        <Flex gap="3">
          <Button onClick={reset}>
            <BiReset /> Reset
          </Button>
          <Button onClick={undo}>
            <BiUndo /> Undo
          </Button>
          <Button onClick={redo}>
            <BiRedo /> Redo
          </Button>
          <Button onClick={handleImportClick}>
            <FiUpload /> Import
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button disabled={exportIsDisabled} onClick={handleExport}>
            <FiSave /> Export
          </Button>
        </Flex>
      </Flex>

      <ExportDialog
        open={isExportOpen}
        onOpenChange={setIsExportOpen}
        json={exportedJson}
        onCopy={copyToClipboard}
        onDownload={handleDownload}
      />
    </Box>
  );
};
