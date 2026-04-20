import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Solaire error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="font-accent text-2xl text-solaire-600">
              we've had a quiet flicker
            </p>
            <h1 className="mt-2 font-display text-4xl text-charcoal-900">
              Something dimmed unexpectedly.
            </h1>
            <p className="mt-4 text-charcoal-500 text-sm">
              Give the page a refresh — if it lingers, send us a WhatsApp and
              we'll look into it.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-solaire-500 text-white text-xs tracking-[0.1em] uppercase hover:bg-solaire-600"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-charcoal-800 text-charcoal-800 text-xs tracking-[0.1em] uppercase hover:bg-charcoal-800 hover:text-cream-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
