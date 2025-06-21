import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  AuthContextProviderProps,
  AuthContextType,
  clearToken,
  getAuthSessionFromToken,
  Session,
} from "./Session";
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext<AuthContextType>({
  session: null,
  isLoading: false,
  setIsLoading: () => { },
  setSession: () => { },
});

export const AuthContextProvider = ({
  initialSession = null,
  children,
}: PropsWithChildren<AuthContextProviderProps>) => {
  const [session, setSession] = useState<Session | null>(initialSession);
  const [isLoading, setIsLoading] = useState<boolean>(!initialSession);
  useEffect(() => {
    async function getSession() {
      try {
        setIsLoading(true);
        const data = await getAuthSessionFromToken();
        if (!data?.access_token || checkTokenExpiration(data.access_token)) {
          await clearToken();
          setSession(null);
        } else {
          setSession(data);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setSession(null);
      } finally {
        setIsLoading(false);
      }
    }
    getSession();
  }, []);

  const checkTokenExpiration = (token: string): boolean => {
    try {
      const decodedToken = jwtDecode<{ exp: number }>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    } catch {
      return true;
    }
  };

  const value = useMemo(
    () => ({
      session,
      isLoading,
      setIsLoading,
      setSession,
    }),
    [session, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
