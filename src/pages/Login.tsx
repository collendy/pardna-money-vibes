
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
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
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email or Phone</Label>
                    <Input 
                      id="email" 
                      placeholder="Enter your email or phone number" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-smarterpartner-purple hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="rounded-xl"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full btn-primary py-6">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold">Create Account</h2>
                <p className="text-smarterpartner-secondary-text">Join our savings community</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input 
                      id="fullname" 
                      placeholder="Enter your full name" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input 
                      id="email" 
                      placeholder="Enter your email address" 
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newpassword">Password</Label>
                    <Input 
                      id="newpassword" 
                      type="password" 
                      placeholder="Create a password" 
                      className="rounded-xl"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full btn-primary py-6">Create Account</Button>
                <p className="mt-4 text-sm text-center text-smarterpartner-secondary-text">
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
