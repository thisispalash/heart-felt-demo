import { createContext, useContext } from 'react';


export interface SyncContextType {}

const SyncContext = createContext<SyncContextType>({});

export default function SyncProvider({ children }: { children: React.ReactNode }) {

  console.log('SyncProvider')

  return (
    <SyncContext.Provider value={{}}>
      {children}
    </SyncContext.Provider>
  );
}

export const useSync = () => useContext(SyncContext);