import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useUIStore } from "@/store/uiStore";
import { FiTrash2 } from "react-icons/fi";
import { FaGripVertical } from "react-icons/fa6";
import {
  DragHandle,
  FieldCard,
  FieldContent,
  FieldLabel,
  FieldType,
  IconButton,
} from "./SortableField.styled";
import type { SortableFieldProps } from "@/types/componentProps";

export function SortableField({ field, onEdit, onDelete }: SortableFieldProps) {
  const { selectedFieldId } = useUIStore();
  const isSelected = selectedFieldId === field.id;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <FieldCard
      ref={setNodeRef}
      style={style}
      selected={isSelected}
      dragging={isDragging}
      onClick={onEdit}
    >
      <DragHandle {...attributes} {...listeners}>
        <FaGripVertical size={20} />
      </DragHandle>

      <FieldContent>
        <FieldLabel>{field.label || `Untitled ${field.type} field`}</FieldLabel>
        <FieldType>
          {field.type.charAt(0).toUpperCase() + field.type.slice(1)}
          {field.required && " (Required)"}
        </FieldType>
      </FieldContent>

      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        danger
      >
        <FiTrash2 size={18} />
      </IconButton>
    </FieldCard>
  );
}
