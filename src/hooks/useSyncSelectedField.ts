import { useEffect } from "react";
import { useFormStore } from "@/store/formStore";
import { useUIStore } from "@/store/uiStore";

export const useSyncSelectedField = () => {
  const fields = useFormStore((s) => s.fields);
  const { selectedFieldId, setSelectedFieldId } = useUIStore();

  useEffect(() => {
    if (!selectedFieldId && fields.length > 0) {
      setSelectedFieldId(fields[0].id);
    } else if (
      selectedFieldId &&
      !fields.some((f) => f.id === selectedFieldId)
    ) {
      setSelectedFieldId(null);
    }
  }, [fields, selectedFieldId, setSelectedFieldId]);

  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return selectedField;
};
