
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;

    try {
      const isEmail = identifier.includes("@");
      await signIn({
        [isEmail ? "email" : "phone"]: identifier,
        password,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullname") as string;
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;

    try {
      const isEmail = identifier.includes("@");
      await signUp({
        name,
        [isEmail ? "email" : "phone"]: identifier,
        password,
      });
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/a944be1f-b473-403c-bfde-5601a2ab7f8b.png" 
            alt="SmarterPartner Logo" 
            className="w-12 h-12 mr-2" 
          />
          <h1 className="text-2xl font-bold text-smarterpartner-purple">SmarterPartner</h1>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold">Welcome Back!</h2>
                <p className="text-smarterpartner-secondary-text">Login to your account</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="identifier">Email or Phone</Label>
                    <Input 
                      id="identifier"
                      name="identifier"
                      required
                      placeholder="Enter your email or phone number" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm font-semibold text-smarterpartner-gold hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="••••••••" 
                      className="rounded-xl"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-primary py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold">Create Account</h2>
                <p className="text-smarterpartner-secondary-text">Join our savings community</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input 
                      id="fullname"
                      name="fullname"
                      required
                      placeholder="Enter your full name" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-identifier">Email or Phone Number</Label>
                    <Input 
                      id="signup-identifier"
                      name="identifier"
                      required
                      placeholder="Enter your email or phone number" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password"
                      name="password"
                      type="password"
                      required
                      placeholder="Create a password" 
                      className="rounded-xl"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-primary py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="mt-4 text-sm text-center text-smarterpartner-secondary-text w-full">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-smarterpartner-purple hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-smarterpartner-purple hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
