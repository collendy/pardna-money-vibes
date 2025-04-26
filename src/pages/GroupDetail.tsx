
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Calendar, 
  DollarSign, 
  Users, 
  ArrowUp,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import MembersList from "@/components/pardna/MembersList";
import CelebrationEffect from "@/components/pardna/CelebrationEffect";

// Mock group data
const groupData = {
  id: "1",
  name: "Family Partner",
  description: "Our family savings group for emergencies and special occasions.",
  amount: 100,
  frequency: "Weekly",
  startDate: "March 15, 2025",
  endDate: "September 15, 2025",
  totalWeeks: 24,
  currentWeek: 8,
  currentPosition: 2,
  members: [
    { id: "1", name: "Jasmine Morris", avatar: "", hasPaid: true, isAdmin: true, position: 1 },
    { id: "2", name: "Marcus Brown", avatar: "", hasPaid: true, position: 2 },
    { id: "3", name: "Keisha Williams", avatar: "", hasPaid: true, position: 3 },
    { id: "4", name: "Devon Richards", avatar: "", hasPaid: false, position: 4 },
    { id: "5", name: "Tanya Bennett", avatar: "", hasPaid: true, position: 5 },
  ],
  rules: [
    "Payments due every Sunday by 8:00 PM",
    "Missed payments result in $10 late fee",
    "Members must join trusted referral only",
    "Withdrawal order was decided at group creation",
  ],
  messages: [
    { id: "1", sender: "Marcus Brown", message: "Just sent my payment for this week!", time: "2 hours ago" },
    { id: "2", sender: "Jasmine Morris", message: "Excellent! Right on time as always.", time: "1 hour ago" },
    { id: "3", sender: "Keisha Williams", message: "I will transfer my funds tomorrow morning.", time: "30 minutes ago" },
  ]
};

const GroupDetail = () => {
  const { id } = useParams();
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentTab, setCurrentTab] = useState("overview");

  const progress = (groupData.currentWeek / groupData.totalWeeks) * 100;

  const handleContribution = () => {
    setShowCelebration(true);
  };

  return (
    <div className="py-6 px-4">
      <div className="bg-white rounded-xl p-5 shadow-sm mb-6 border border-gray-100">
        <h1 className="text-2xl font-bold">{groupData.name}</h1>
        <p className="text-gray-600 mt-1 mb-4">{groupData.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <DollarSign className="text-smarterpartner-purple w-5 h-5 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Contribution</p>
              <p className="font-bold">${groupData.amount} {groupData.frequency}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="text-smarterpartner-purple w-5 h-5 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Members</p>
              <p className="font-bold">{groupData.members.length} people</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="text-smarterpartner-purple w-5 h-5 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Start Date</p>
              <p className="font-bold">{groupData.startDate}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="text-smarterpartner-purple w-5 h-5 mr-2" />
            <div>
              <p className="text-sm text-gray-500">End Date</p>
              <p className="font-bold">{groupData.endDate}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium">Group Progress</p>
            <p className="text-sm font-medium">{groupData.currentWeek}/{groupData.totalWeeks} weeks</p>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-right text-xs text-gray-500 mt-1">Next payout: Devon Richards</p>
        </div>
        
        <Button 
          className="w-full rounded-xl bg-smarterpartner-purple hover:bg-smarterpartner-purple/90"
          onClick={handleContribution}
        >
          <ArrowUp className="mr-2 h-4 w-4" /> Make Your Contribution
        </Button>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Group Rules</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {groupData.rules.map((rule, index) => (
                    <li key={index} className="text-gray-700">{rule}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Current Status</h3>
                <p className="text-gray-700">Week {groupData.currentWeek} of {groupData.totalWeeks}</p>
                <p className="text-gray-700">Current position: {groupData.currentPosition}</p>
                <p className="text-gray-700">Total collected: ${groupData.amount * groupData.currentWeek}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="members" className="mt-4">
          <MembersList 
            members={groupData.members} 
            currentPosition={groupData.currentPosition} 
          />
        </TabsContent>
        
        <TabsContent value="chat" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                {groupData.messages.map((msg) => (
                  <div key={msg.id} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <p className="font-semibold">{msg.sender}</p>
                      <p className="text-xs text-gray-500">{msg.time}</p>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <input 
                  type="text" 
                  placeholder="Send a message..." 
                  className="flex-1 rounded-lg border border-gray-300 p-2"
                />
                <Button variant="outline" size="icon" className="rounded-lg">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <CelebrationEffect 
        active={showCelebration} 
        onComplete={() => setShowCelebration(false)} 
      />
    </div>
  );
};

export default GroupDetail;
