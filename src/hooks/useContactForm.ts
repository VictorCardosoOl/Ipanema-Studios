import React, { useState, useRef, useCallback } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'Este campo é obrigatório.';
    } else if (name === 'email' && !EMAIL_REGEX.test(value)) {
      error = 'Insira um e-mail válido.';
    }
    setFieldErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const details = formData.get('details')?.toString() || '';

    const isNameValid = validateField('name', name);
    const isEmailValid = validateField('email', email);
    const isDetailsValid = validateField('details', details);

    if (!isNameValid || !isEmailValid || !isDetailsValid) {
      setErrorMessage('Por favor, corrija os erros abaixo antes de enviar.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');
    
    try {
      // Simulação de API. Em produção, seria um fetch() ou axios.post()
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      
      setTimeout(() => {
        setFormState('idle');
        formRef.current?.reset();
        setFieldErrors({});
      }, 4000);
    } catch {
      setErrorMessage('Erro inesperado. Tente novamente.');
      setFormState('error');
    }
  }, []);

  return { formRef, formState, errorMessage, fieldErrors, handleBlur, handleChange, handleSubmit };
}
