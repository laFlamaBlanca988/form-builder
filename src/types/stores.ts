import type {
  FormField,
  FieldType,
  TextField,
  SelectField,
  CheckboxField,
} from "./form";

export interface FormStore {
  fields: FormField[];
  history: FormField[][];
  historyIndex: number;
  addField: (type: FieldType) => void;
  updateField: (
    id: string,
    updatedProps:
      | Partial<TextField>
      | Partial<SelectField>
      | Partial<CheckboxField>
  ) => void;
  deleteField: (id: string) => void;
  moveField: (fromIndex: number, toIndex: number) => void;
  undo: () => void;
  redo: () => void;
  importFields: (json: FormField[]) => void;
  exportFields: () => string;
  reset: () => void;
  persist?: {
    clearStorage?: () => void;
  };
}

export interface UIState {
  selectedFieldId: string | null;
  setSelectedFieldId: (id: string | null) => void;
}
