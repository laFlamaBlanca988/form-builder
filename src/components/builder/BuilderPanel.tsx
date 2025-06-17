import { Heading } from "@/components/ui/Heading";
import { FieldTypeSelector } from "./FieldTypeSelector";
import { FieldList } from "./FieldList";
import { FieldEditor } from "./FieldEditor";
import { useSyncSelectedField } from "@/hooks/useSyncSelectedField";
import {
  PanelContainer,
  ContentContainer,
  LeftPanel,
  RightPanel,
  ScrollableArea,
  EmptyState,
  FormTitle,
} from "@/components/builder/BuilderPanel.styled";

export function BuilderPanel() {
  const selectedField = useSyncSelectedField();

  return (
    <PanelContainer>
      <FormTitle>
        <Heading level="h2" size="xl">
          Form Builder
        </Heading>
      </FormTitle>
      <FieldTypeSelector />
      {selectedField ? (
        <ContentContainer>
          <LeftPanel>
            <Heading level="h3" size="md" variant="primary">
              Fields
            </Heading>
            <ScrollableArea>
              <FieldList />
            </ScrollableArea>
          </LeftPanel>

          <RightPanel>
            <Heading level="h3" size="md" variant="primary">
              Field Settings
            </Heading>
            <FieldEditor field={selectedField} />
          </RightPanel>
        </ContentContainer>
      ) : (
        <EmptyState>
          <p>Select a field to edit its properties</p>
          <p>or add a new field from the options above</p>
        </EmptyState>
      )}
    </PanelContainer>
  );
}
