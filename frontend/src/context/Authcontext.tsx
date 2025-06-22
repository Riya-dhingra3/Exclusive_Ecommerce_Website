import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  user_id: string;
  name?: string;
  email?: string;
  phone_number?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | undefined;
  refreshToken: string | undefined;
  login: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    const token = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    if (storedUser && token && refreshToken) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User, accessToken: string, refreshToken: string) => {
    Cookies.set("access_token", accessToken, { expires: 1 });
    Cookies.set("refresh_token", refreshToken, { expires: 1 });
    Cookies.set("user", JSON.stringify(userData), { expires: 1 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token: Cookies.get("access_token"),
        refreshToken: Cookies.get("refresh_token"),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
