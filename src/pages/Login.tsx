
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
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password || (!isLogin && !name)) {
      setError("All fields are required");
      return;
    }

    try {
      if (isLogin) {
        const success = await login(email, password, activeTab);
        if (success) {
          toast({
            title: "Successfully logged in!",
            description: "Welcome back to SeminarBook",
          });
          navigate(activeTab === "admin" ? "/admin/dashboard" : "/halls");
        } else {
          setError("Invalid email or password");
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role: activeTab,
            },
          },
        });

        if (signUpError) throw signUpError;

        toast({
          title: "Registration successful!",
          description: "Please check your email to verify your account",
        });
      }
    } catch (error: any) {
      setError(error.message || "An error occurred");
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
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={`${activeTab}@example.com`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="text-sm font-medium text-destructive">{error}</div>
                  )}
                  <Button type="submit" className="w-full">
                    {isLogin ? `Sign In as ${activeTab}` : `Register as ${activeTab}`}
                  </Button>
                </form>
                <div className="mt-4 text-sm text-center">
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-purple hover:underline"
                  >
                    {isLogin ? "Need an account? Register" : "Already have an account? Sign In"}
                  </button>
                </div>
                <div className="mt-4 text-sm text-center text-muted-foreground">
                  <p>Demo login: {activeTab}@example.com (any password)</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-center w-full text-muted-foreground">
              <p>This is a demo application. No real authentication is performed.</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
