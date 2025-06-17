import { useFormStore } from "@/store/formStore";
import { Heading } from "@/components/ui/Heading";
import { FiType, FiCheckSquare, FiList } from "react-icons/fi";
import type { FieldType } from "@/types/form";
import {
  IconWrapper,
  TypeCard,
  TypeSelectorContainer,
  TypesGrid,
} from "./FieldTypeSelector.styled";

export function FieldTypeSelector() {
  const addField = useFormStore((s) => s.addField);

  const handleAddField = (type: FieldType) => {
    addField(type);
  };

  return (
    <TypeSelectorContainer>
      <Heading level="h3" size="md">
        Add Field
      </Heading>

      <TypesGrid>
        <TypeCard onClick={() => handleAddField("text")}>
          <IconWrapper>
            <FiType size={24} />
          </IconWrapper>
          Text Field
        </TypeCard>

        <TypeCard onClick={() => handleAddField("checkbox")}>
          <IconWrapper>
            <FiCheckSquare size={24} />
          </IconWrapper>
          Checkbox
        </TypeCard>

        <TypeCard onClick={() => handleAddField("select")}>
          <IconWrapper>
            <FiList size={24} />
          </IconWrapper>
          Select
        </TypeCard>
      </TypesGrid>
    </TypeSelectorContainer>
  );
}
