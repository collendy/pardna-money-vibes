
import React from "react";
import { Link } from "react-router-dom";
import { Users, CalendarIcon, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PardnaCardProps {
  id: string;
  name: string;
  members: number;
  maxMembers: number;
  amount: number;
  frequency: string;
  progress: number;
  daysLeft: number;
  status: "active" | "pending" | "completed";
}

const PardnaCard = ({
  id,
  name,
  members,
  maxMembers,
  amount,
  frequency,
  progress,
  daysLeft,
  status,
}: PardnaCardProps) => {
  return (
    <Link to={`/groups/${id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className={cn(
          "h-2",
          status === "active" ? "bg-jamaica-green" : 
          status === "pending" ? "bg-jamaica-gold" : "bg-gray-300"
        )} />
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Users className="h-4 w-4 mr-1" />
                <span>{members}/{maxMembers} members</span>
              </div>
            </div>
            <Badge className={cn(
              status === "active" ? "bg-jamaica-green" : 
              status === "pending" ? "bg-jamaica-gold" : "bg-gray-300"
            )}>
              {status === "active" ? "Active" : 
               status === "pending" ? "Pending" : "Completed"}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-jamaica-green mr-1" />
              <span className="font-semibold">${amount}</span>
              <span className="text-sm text-gray-500 ml-1">{frequency}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-500">{daysLeft} days left</span>
            </div>
          </div>
          
          <Progress value={progress} className="h-2 bg-gray-100" />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PardnaCard;
