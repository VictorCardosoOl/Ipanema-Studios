import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'O nome deve ter no mínimo 2 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'),
  details: z.string().min(10, 'Conte-nos um pouco mais sobre o projeto (mínimo 10 caracteres).'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type FormState = 'idle' | 'loading' | 'success' | 'error';

export function useContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState('loading');
    setErrorMessage('');
    
    try {
      // Simulação de API.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      
      setTimeout(() => {
        setFormState('idle');
        reset();
      }, 4000);
    } catch {
      setErrorMessage('Erro inesperado. Tente novamente.');
      setFormState('error');
    }
  };

  return { 
    register, 
    handleSubmit: handleSubmit(onSubmit), 
    errors, 
    formState, 
    errorMessage 
  };
}
