
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword(email);
      toast({
        title: "Success",
        description: "Check your email for the password reset link",
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
          <h1 className="text-2xl font-bold text-smarterpartner-purple">Reset Password</h1>
        </div>

        <Card>
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold">Forgot your password?</h2>
            <p className="text-smarterpartner-secondary-text">
              Enter your email to reset your password
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-primary py-6"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </Button>
              <div className="text-center mt-4">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-smarterpartner-purple hover:underline"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
