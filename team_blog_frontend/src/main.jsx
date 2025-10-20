import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as Sentry from '@sentry/react';

// -------------------------------------------------------------------
// SENTRY INITIALIZATION - Compatible with v8+
// -------------------------------------------------------------------

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const APP_ENV = import.meta.env.VITE_APP_ENV || 'development';
const APP_VERSION = import.meta.env.VITE_APP_VERSION || 'unreleased';

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: APP_ENV,
    release: APP_VERSION,
    integrations: [
      Sentry.browserTracingIntegration(), // ✅ v8 replacement for BrowserTracing
      Sentry.replayIntegration(),         // optional (captures user sessions)
    ],
    tracesSampleRate: 1.0, // performance tracing
    replaysSessionSampleRate: 0.1, // optional: record 10% of sessions
    replaysOnErrorSampleRate: 1.0,  // always capture sessions with errors
  });
} else {
  console.warn('Sentry DSN not found. Error monitoring is disabled.');
}

// -------------------------------------------------------------------
// RENDER APPLICATION
// -------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {SENTRY_DSN ? (
      <Sentry.ErrorBoundary fallback={<div>An error has occurred. Our team has been notified.</div>}>
        <App />
      </Sentry.ErrorBoundary>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
