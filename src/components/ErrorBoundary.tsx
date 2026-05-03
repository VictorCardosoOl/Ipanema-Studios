import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center p-8 bg-cream text-charcoal">
          <div className="max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 font-serif">Oops, algo deu errado.</h2>
            <p className="text-sm font-sans opacity-70 mb-6">
              Ocorreu um erro ao carregar esta seção. Por favor, recarregue a página ou tente novamente mais tarde.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-charcoal text-cream text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-80 transition-opacity"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
