
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (user: Omit<User, "id"> & { password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    try {
      // In a real app, you would call an API here
      const mockUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = mockUsers.find((u: any) => u.email === email);
      
      if (foundUser && foundUser.password === password) {
        const { password, ...userWithoutPassword } = foundUser;
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        toast.success("Logged in successfully");
        return;
      }
      
      throw new Error("Invalid email or password");
    } catch (error) {
      toast.error("Login failed: " + (error as Error).message);
      throw error;
    }
  };

  // Mock logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  // Mock register function
  const register = async (userData: Omit<User, "id"> & { password: string }) => {
    try {
      // In a real app, you would call an API here
      const mockUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = mockUsers.find((u: any) => u.email === userData.email);
      
      if (existingUser) {
        throw new Error("Email already in use");
      }
      
      const newUser = {
        ...userData,
        id: `user-${Date.now()}`,
      };
      
      mockUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(mockUsers));
      
      const { password, ...userWithoutPassword } = newUser;
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      toast.success("Registered successfully");
    } catch (error) {
      toast.error("Registration failed: " + (error as Error).message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
