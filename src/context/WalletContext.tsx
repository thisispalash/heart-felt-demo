import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { type GeneratedWallet } from '@/redux/features/web3/types';
import { setupListeners } from '@/redux/features/web3/thunks/wallet';


export interface WalletContextType {
  isGenerated?: boolean;
  wallet?: GeneratedWallet['wallet'];
  display?: GeneratedWallet['display'];
  generateWallet?: () => void;
  connectWallet?: () => void;
}

const WalletContext = createContext<WalletContextType>({});

export default function WalletProvider({ children }: { children: React.ReactNode }) {

  const dispatch = useAppDispatch();
  const web3 = useAppSelector((state: RootState) => state.web3);
  
  const [ isGenerated, setIsGenerated ] = useState<boolean>(false);
  const [ wallet, setWallet ] = useState<WalletContextType['wallet']>(undefined);
  const [ display, setDisplay ] = useState<WalletContextType['display']>(undefined);


  // useEffect(() => {

  //   if (web3.isGenerated) { setIsGenerated(true) } 
  //   else { dispatch(setupListeners()) }

  //   if(web3.wallet) { setWallet(web3.wallet) }
  //   if(web3.display) { setDisplay(web3.display) }
  // }, [web3]);

  // const generateWallet = () => {
  //   setIsGenerated(true);
  //   console.log(web3);
  //   dispatch({ type: 'web3/generateWallet' });
  //   console.log(web3);
  //   setWallet(web3.wallet);
  //   setDisplay(web3.display);
  // }

  return (
    <WalletContext.Provider 
      value={{
        wallet, 
        display,
        isGenerated,
        // generateWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}


export function useWallet() {

  const ctx = useContext(WalletContext);

  if (ctx === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }

  return ctx;
}