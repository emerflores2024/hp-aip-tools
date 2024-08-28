'use client'

import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/app/session_handler';

// Define the context type
interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

// Create the context with the defined type
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the props type for the provider
interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userName, setUserName] = useLocalStorage('userName', '');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
