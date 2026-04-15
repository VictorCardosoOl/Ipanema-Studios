import React, { useState, useRef, useCallback } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const details = formData.get('details')?.toString().trim();

    if (!name || !email || !details) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      setFormState('error');
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setErrorMessage('Insira um e-mail válido.');
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
      }, 3000);
    } catch {
      setErrorMessage('Erro inesperado. Tente novamente.');
      setFormState('error');
    }
  }, []);

  return { formRef, formState, errorMessage, handleSubmit };
}
