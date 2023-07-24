'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import WalletProvider from '@/context/WalletContext';

export function Providers({ children }: { children: React.ReactNode }) {  
  
  return (
    <Provider store={store}>
      <WalletProvider>
        {children}
      </WalletProvider>
    </Provider>
  );
  
}
