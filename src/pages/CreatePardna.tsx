
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

const CreatePardna = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    amount: 50,
    members: 5,
    frequency: "weekly",
    duration: 3, // months
  });

  const handleChange = (field: string, value: string | number) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would submit the form data to create a new Pardna
    // For now, we'll just navigate to the home page
    navigate("/");
  };

  const totalAmount = formState.amount * formState.members;
  const cycleCount = formState.duration * (formState.frequency === "weekly" ? 4 : 
                                           formState.frequency === "bi-weekly" ? 2 : 1);

  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Create Your Pardna</h1>
      
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pardna Details</CardTitle>
            <CardDescription>Set up your group savings circle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Pardna Name</Label>
              <Input 
                id="name" 
                placeholder="E.g., Family Savings, Friend Circle"
                value={formState.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea 
                id="description" 
                placeholder="What's this Pardna for?"
                value={formState.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="resize-none"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contribution Setup</CardTitle>
            <CardDescription>Configure how much and how often</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Contribution Amount (USD)</Label>
              <div className="flex items-center gap-2">
                <span className="text-xl font-medium">$</span>
                <Input 
                  id="amount" 
                  type="number"
                  min="10"
                  max="1000"
                  value={formState.amount}
                  onChange={(e) => handleChange("amount", Number(e.target.value))}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Number of Members: {formState.members}</Label>
              <Slider 
                value={[formState.members]} 
                min={2} 
                max={20}
                step={1}
                onValueChange={(values) => handleChange("members", values[0])} 
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>2</span>
                <span>20</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="frequency">Payment Frequency</Label>
              <Select 
                value={formState.frequency}
                onValueChange={(value) => handleChange("frequency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (Months)</Label>
              <Select 
                value={String(formState.duration)}
                onValueChange={(value) => handleChange("duration", Number(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 month</SelectItem>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                  <SelectItem value="12">12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span>Each member contributes:</span>
                <span className="font-medium">${formState.amount} {formState.frequency}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Total per cycle:</span>
                <span className="font-medium">${totalAmount}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Number of cycles:</span>
                <span className="font-medium">{cycleCount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold">Each member receives:</span>
                <span className="font-bold text-jamaica-green">${totalAmount}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-jamaica-green hover:bg-jamaica-accent-green"
            >
              Create Pardna
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CreatePardna;
