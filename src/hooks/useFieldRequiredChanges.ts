import { useState, useEffect } from "react";
import type { FormField } from "@/types/form";

export function useFieldRequiredChanges(
  fields: FormField[],
  onRequiredChanged: (fieldId: string) => void
) {
  const [prevFields, setPrevFields] = useState<FormField[]>([]);

  useEffect(() => {
    if (fields.length === 0) {
      setPrevFields([]);
      return;
    }

    fields.forEach((field) => {
      const prevField = prevFields.find((f) => f.id === field.id);

      if (prevField && prevField.required && !field.required) {
        onRequiredChanged(field.id);
      }
    });

    setPrevFields(fields);
  }, [fields, prevFields, onRequiredChanged]);

  return null;
}
