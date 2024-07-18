import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

import '@themovie/base/presentation/styles/main.less';
import '@themovie/base/utils/axios-interceptor';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
