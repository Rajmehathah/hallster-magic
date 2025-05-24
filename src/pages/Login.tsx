
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRole } from "../types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Key, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState<UserRole>("user");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    if (!email || !password || (!isLogin && !name)) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const success = await login(email, password, activeTab);
        if (success) {
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in.",
          });
          navigate(activeTab === "admin" ? "/admin/dashboard" : "/halls");
        } else {
          setError("Invalid email or password");
        }
      } else {
        // Registration flow
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role: activeTab,
              first_name: name.split(' ')[0] || '',
              last_name: name.split(' ').slice(1).join(' ') || '',
            },
          },
        });

        if (signUpError) {
          if (signUpError.message.includes('already registered')) {
            setError("This email is already registered. Please try logging in instead.");
          } else {
            setError(signUpError.message);
          }
        } else if (data.user) {
          toast({
            title: "Registration successful!",
            description: "Your account has been created. You can now log in.",
          });
          // Switch to login mode after successful registration
          setIsLogin(true);
          setPassword("");
          setError("");
        }
      }
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as UserRole);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-light/30 to-blue-soft/40">
      <div className="w-full max-w-md px-4 animate-scale-in">
        <Card className="border-2 border-purple/10 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <CalendarDays size={40} className="text-purple" />
            </div>
            <CardTitle className="text-2xl font-bold">Seminar Hall Booking</CardTitle>
            <CardDescription>
              {isLogin ? "Sign in to your account" : "Create a new account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User size={16} />
                  <span>User</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Key size={16} />
                  <span>Admin</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab}>
                <form onSubmit={handleAuth} className="space-y-4 mt-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                    {!isLogin && (
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 6 characters long
                      </p>
                    )}
                  </div>
                  {error && (
                    <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Processing..." : isLogin ? `Sign In as ${activeTab}` : `Register as ${activeTab}`}
                  </Button>
                </form>
                <div className="mt-4 text-sm text-center">
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError("");
                      setPassword("");
                    }}
                    className="text-purple hover:underline"
                    disabled={isLoading}
                  >
                    {isLogin ? "Need an account? Register here" : "Already have an account? Sign in"}
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
