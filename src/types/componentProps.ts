import type { FormField } from "./form";

export interface FieldEditorProps {
  field: FormField;
}

export interface SortableFieldProps {
  field: FormField;
  onEdit: () => void;
  onDelete: () => void;
}

export interface FormFieldRendererProps {
  field: FormField;
  errors: Record<string, boolean>;
  validateField: (
    id: string,
    value: string | boolean,
    required: boolean
  ) => void;
}
