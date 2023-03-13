import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  AmountRentalOffers: 318,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      amountRentalOffers = {Setting.AmountRentalOffers}
    />
  </React.StrictMode>,
);
