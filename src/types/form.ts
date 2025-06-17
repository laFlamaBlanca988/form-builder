export type FieldType = "text" | "checkbox" | "select";

export interface BaseField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder: string;
  value: string;
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
  value: boolean;
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
  value: string;
  placeholder: string;
}

export type FormField = TextField | CheckboxField | SelectField;

export interface UseFormValidationReturn {
  errors: Record<string, boolean>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  isSubmitted: boolean;
  validateField: (
    id: string,
    value: string | boolean,
    required: boolean
  ) => void;
  validateAllFields: (fields: FormField[]) => void;
  handleSubmit: (
    fields: FormField[],
    onSuccess?: () => void
  ) => (e: React.FormEvent<HTMLFormElement>) => void;
  resetValidationState: () => void;
  clearSubmission: () => void;
}
