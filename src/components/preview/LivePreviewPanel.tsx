import { useFormStore } from "@/store/formStore";
import { FormFieldRenderer } from "@/components/shared/FormFieldRenderer";
import Button from "../ui/Button";
import { VStack } from "styled-system/jsx";
import { Heading } from "@/components/ui/Heading";
import { FiCheck, FiInfo } from "react-icons/fi";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Message } from "../ui/Message";
import {
  FormTitle,
  PreviewContainer,
  SubmitContainer,
} from "./LivePreviewPanel.styled";
import { useEffect, useMemo, useCallback } from "react";
import { useFieldRequiredChanges } from "@/hooks/useFieldRequiredChanges";

export const LivePreviewPanel = () => {
  const fields = useFormStore((state) => state.fields);
  const {
    errors,
    setErrors,
    isSubmitted,
    validateField,
    handleSubmit,
    resetValidationState,
    clearSubmission,
  } = useFormValidation();
  const errorCount = useMemo(() => Object.keys(errors).length, [errors]);

  const handleRequiredChanged = useCallback(
    (fieldId: string) => {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];

        return newErrors;
      });
    },
    [setErrors]
  );

  useFieldRequiredChanges(fields, handleRequiredChanged);

  useEffect(() => {
    if (fields.length === 0) {
      resetValidationState();
    }
  }, [fields.length, resetValidationState]);

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(clearSubmission, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted, clearSubmission]);

  return (
    <PreviewContainer>
      {fields.length === 0 ? (
        <Message type="info" icon={<FiInfo size={20} />} role="alert">
          No form fields have been added yet. Add some fields in the builder
          panel.
        </Message>
      ) : (
        <form onSubmit={handleSubmit(fields)}>
          <FormTitle>
            <Heading level="h2" size="xl">
              Form Preview
            </Heading>
          </FormTitle>

          <VStack gap="4" alignItems="start">
            {fields.map((field) => (
              <FormFieldRenderer
                key={field.id}
                field={field}
                errors={errors}
                validateField={validateField}
              />
            ))}
            <SubmitContainer>
              <Button disabled={errorCount > 0}>Submit Form</Button>
            </SubmitContainer>
          </VStack>

          {isSubmitted && (
            <Message type="success" icon={<FiCheck size={20} />} role="status">
              Form submitted successfully!
            </Message>
          )}
        </form>
      )}
    </PreviewContainer>
  );
};
