import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
          </div>
          <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-white/80">USPT</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span className="text-sm font-light tracking-tight text-white">Universidad de San Pablo – Tucumán</span>
            </div>
            <h1 className="max-w-4xl text-left text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl font-heading">
              Educación de calidad para transformar el futuro
            </h1>
            <p className="max-w-2xl text-left text-lg font-light leading-relaxed text-white/90 sm:text-xl font-body">
              En la Universidad de San Pablo – Tucumán formamos profesionales íntegros, comprometidos con la excelencia académica y el desarrollo social.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="/carreras" className="rounded-xl px-8 py-4 text-base font-medium tracking-tight transition-all duration-300 bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-lg">
                Ver Oferta Académica
              </a>
              <a href="/contacto" className="rounded-xl px-8 py-4 text-base font-medium tracking-tight transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                Solicitar Información
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
