import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (credentials: { email?: string; phone?: string; password: string }) => Promise<void>;
  signUp: (credentials: { email?: string; phone?: string; password: string; name: string }) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (identifier: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (credentials: { email?: string; phone?: string; password: string }) => {
    if (!credentials.email && !credentials.phone) {
      throw new Error("Either email or phone is required");
    }
    
    let result;
    
    if (credentials.email) {
      // Sign in with email
      result = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      });
    } else if (credentials.phone) {
      // Sign in with phone
      result = await supabase.auth.signInWithPassword({
        phone: credentials.phone,
        password: credentials.password
      });
    }
    
    const { error } = result || { error: new Error("Invalid credentials") };
    if (error) throw error;
    
    navigate("/");
  };

  const signUp = async (credentials: { email?: string; phone?: string; password: string; name: string }) => {
    if (!credentials.email && !credentials.phone) {
      throw new Error("Either email or phone is required");
    }
    
    let result;
    
    if (credentials.email) {
      // Sign up with email
      result = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            name: credentials.name,
          },
        },
      });
    } else if (credentials.phone) {
      // Sign up with phone
      result = await supabase.auth.signUp({
        phone: credentials.phone,
        password: credentials.password,
        options: {
          data: {
            name: credentials.name,
          },
        },
      });
    }
    
    const { error } = result || { error: new Error("Invalid credentials") };
    if (error) throw error;
    
    navigate("/");
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  const resetPassword = async (identifier: string) => {
    let result;
    
    if (identifier.includes("@")) {
      // Reset password with email
      result = await supabase.auth.resetPasswordForEmail(identifier);
    } else {
      // Reset password with phone
      result = await supabase.auth.resetPasswordForPhone(identifier);
    }
    
    const { error } = result;
    if (error) throw error;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
