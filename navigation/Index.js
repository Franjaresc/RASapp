import React from 'react';
import { AuthProvider } from '../firebase/AuthProvider';
import Routes from './Routes.js';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;