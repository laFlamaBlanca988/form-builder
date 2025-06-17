import { useCallback, useRef, useState } from "react";
import { useFormStore } from "@/store/formStore";
import { toast } from "react-toastify";

export function useHeaderActions() {
  const { fields, exportFields, importFields, undo, redo, reset } =
    useFormStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [exportedJson, setExportedJson] = useState("");

  const exportIsDisabled = fields.length === 0;

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      if (file.size > 1024 * 1024) {
        toast.error("File too large");
        event.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result !== "string") {
            throw new Error("Invalid file format");
          }

          const json = JSON.parse(result);

          if (!Array.isArray(json)) {
            throw new Error("Invalid form configuration format");
          }

          importFields(json);
          toast.success("Form configuration imported successfully!");
        } catch (error) {
          toast.error(error instanceof Error && "Invalid JSON file");
        }
      };

      reader.onerror = () => {
        toast.error("Error reading file");
      };

      reader.readAsText(file);
      event.target.value = "";
    },
    [importFields]
  );

  const handleExport = () => {
    const json = exportFields();
    setExportedJson(json);
    setIsExportOpen(true);
  };

  const handleDownload = () => {
    const blob = new Blob([exportedJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-config.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Form configuration downloaded!");
    setIsExportOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(exportedJson)
      .then(() => toast.success("JSON copied to clipboard!"))
      .catch(() => toast.error("Failed to copy to clipboard"));
  };

  return {
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
  };
}
