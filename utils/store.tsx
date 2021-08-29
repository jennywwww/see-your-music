import React from 'react'

type StoreProviderProps = {
  children: React.ReactNode;
}

type AppContext = {
  apiKey: string;
}

export const StoreContext = React.createContext<AppContext>(null)

export function StoreProvider ({ children }: StoreProviderProps) {
  const store = {
    apiKey: process.env.REACT_APP_LASTFM_API_KEY
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
