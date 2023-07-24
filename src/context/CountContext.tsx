import { createContext, useContext } from 'react';


export interface CountContextType {}

const CountContext = createContext<CountContextType>({});

export default function CountProvider({ children }: { children: React.ReactNode }) {

  return (
    <CountContext.Provider value={{}}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => useContext(CountContext);