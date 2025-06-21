import { jwtDecode } from 'jwt-decode';

// Define the Session type
export type Session = {
    user: any;
    access_token: string;
    refresh_token: string;
  };
  
// Define the store object
export const store = {
  get(provider: string) {
    const tokenData = localStorage.getItem(provider);
    return tokenData ? JSON.parse(tokenData) : null;
  },
  set(provider: string, data: unknown) {
    localStorage.setItem(provider, JSON.stringify(data));
  },
  clear(provider: string) {
    localStorage.removeItem(provider);
  },
};


export type AuthContextType = {
    session: Session | null;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    setSession: (session: Session | null) => void;
  };
  

  export type AuthContextProviderProps = {
    initialSession?: Session | null;
    children: React.ReactNode;
  };


export async function getAuthSessionFromToken(): Promise<Session | null> {
  try {
    const access_token = await store.get('access_token');
    const refresh_token = await store.get('refresh_token');
    if (!access_token || !refresh_token) {
      return null;
    }
    const decodedToken: any = jwtDecode(access_token);
    return {
      access_token,
      refresh_token,
      user: decodedToken,
    };
  } catch (error) {
    console.error('Session retrieval error:', error);
    return null;
  }
}

export async function persistAuthToken(
  auth_token: string
): Promise<{ success: boolean; error?: any }> {
  try {
    await store.set('access_token', auth_token);
    return { success: true };
  } catch (error) {
    console.error('Token persistence error:', error);
    return { success: false, error: error };
  }
}

export async function persistRefreshToken(
  refresh_token: string
): Promise<{ success: boolean; error?: any }> {
  try {
    await store.set('refresh_token', refresh_token);
    return { success: true };
  } catch (error) {
    console.error('Token persistence error:', error);
    return { success: false, error: error };
  }
}

export async function getToken(): Promise<{
  token: string;
  refresh_token: string;
}> {
  const token = await store.get('access_token');
  const refresh_token = await store.get('refresh_token');
  return { token, refresh_token };
}

export async function clearToken() {
  try {
    await store.clear('access_token');
    await store.clear('refresh_token');
    return { success: true };
  } catch (error) {
    console.error('Storage clear error:', error);
    return { success: false, error: error };
  }
}
