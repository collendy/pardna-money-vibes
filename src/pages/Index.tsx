
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Users, Plus } from "lucide-react";
import PardnaCard from "@/components/pardna/PardnaCard";
import CelebrationEffect from "@/components/pardna/CelebrationEffect";

// Mock data for the home page
const mockPardnas = [
  {
    id: "1",
    name: "Family Partner",
    members: 5,
    maxMembers: 6,
    amount: 100,
    frequency: "weekly",
    progress: 65,
    daysLeft: 10,
    status: "active" as const,
  },
  {
    id: "2",
    name: "Work Crew Savings",
    members: 10,
    maxMembers: 10,
    amount: 50,
    frequency: "bi-weekly",
    progress: 30,
    daysLeft: 24,
    status: "active" as const,
  },
  {
    id: "3",
    name: "Christmas Shopping Fund",
    members: 3,
    maxMembers: 8,
    amount: 200,
    frequency: "monthly",
    progress: 10,
    daysLeft: 75,
    status: "pending" as const,
  },
];

const HomeBanner = () => (
  <div className="bg-gradient-smarterpartner mb-6 rounded-xl p-5 text-white">
    <h2 className="text-xl font-bold mb-2">Ready to start saving?</h2>
    <p className="text-white/90 mb-4">Create your first Partner group or join an existing one today!</p>
    <div className="flex gap-3">
      <Button className="bg-white text-smarterpartner-purple hover:bg-white/90 rounded-xl">
        <Plus className="mr-2 h-4 w-4" />
        Create Partner
      </Button>
      <Button variant="outline" className="border-white text-white hover:bg-white/20 rounded-xl">
        <Users className="mr-2 h-4 w-4" />
        Join Group
      </Button>
    </div>
  </div>
);

const QuickStats = () => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-center mb-2">
        <BadgeDollarSign className="w-5 h-5 text-smarterpartner-purple mr-2" />
        <h3 className="font-medium text-gray-600">Total Savings</h3>
      </div>
      <p className="text-2xl font-bold">$1,200</p>
    </div>
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-center mb-2">
        <Users className="w-5 h-5 text-smarterpartner-purple mr-2" />
        <h3 className="font-medium text-gray-600">Active Groups</h3>
      </div>
      <p className="text-2xl font-bold">2</p>
    </div>
  </div>
);

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const triggerCelebration = () => {
    setShowCelebration(true);
  };

  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl font-bold mb-2">Welcome, Jasmine!</h1>
      <p className="text-gray-600 mb-6">Let's check your Partner progress</p>
      
      <HomeBanner />
      <QuickStats />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Partners</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-smarterpartner-purple"
          onClick={triggerCelebration}
        >
          See all
        </Button>
      </div>
      
      <div className="space-y-4">
        {mockPardnas.map((pardna) => (
          <PardnaCard key={pardna.id} {...pardna} />
        ))}
      </div>
      
      <CelebrationEffect 
        active={showCelebration} 
        onComplete={() => setShowCelebration(false)} 
      />
    </div>
  );
};

export default Index;
