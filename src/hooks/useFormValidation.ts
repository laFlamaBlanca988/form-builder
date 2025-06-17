import { useState, useCallback } from "react";
import type { FormField, UseFormValidationReturn } from "@/types/form";

export const useFormValidation = (): UseFormValidationReturn => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = useCallback(
    (id: string, value: string | boolean, required: boolean) => {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (required && !value) {
          newErrors[id] = true;
        } else {
          delete newErrors[id];
        }
        return newErrors;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (fields: FormField[], onSuccess?: () => void) =>
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(false);

        const newErrors: Record<string, boolean> = {};
        fields.forEach((field) => {
          if (field.required && !field.value) {
            newErrors[field.id] = true;
          }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          setIsSubmitted(true);
          onSuccess?.();
        }
      },
    []
  );

  const resetValidationState = useCallback(() => {
    setErrors({});
    setIsSubmitted(false);
  }, []);

  const clearSubmission = () => {
    setIsSubmitted(false);
  };

  const validateAllFields = useCallback((fields: FormField[]) => {
    const newErrors: Record<string, boolean> = {};
    fields.forEach((field) => {
      if (field.required && !field.value) {
        newErrors[field.id] = true;
      }
    });

    setErrors(newErrors);
  }, []);

  return {
    errors,
    setErrors,
    isSubmitted,
    validateField,
    validateAllFields,
    handleSubmit,
    resetValidationState,
    clearSubmission,
  };
};
