
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Member {
  id: string;
  name: string;
  avatar?: string;
  hasPaid: boolean;
  isAdmin?: boolean;
  position: number;
}

interface MembersListProps {
  members: Member[];
  currentPosition: number;
}

const MembersList = ({ members, currentPosition }: MembersListProps) => {
  return (
    <div className="space-y-3">
      {members.map((member) => (
        <div
          key={member.id}
          className={cn(
            "flex items-center justify-between p-3 rounded-lg border",
            member.position === currentPosition ? "bg-smarterpartner-purple/10 border-smarterpartner-purple" : "",
            !member.hasPaid && member.position <= currentPosition ? "bg-smarterpartner-gold/10 border-smarterpartner-gold" : ""
          )}
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={member.avatar} />
              <AvatarFallback className="bg-gray-200 text-gray-600">
                {member.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium flex items-center">
                {member.name}
                {member.isAdmin && (
                  <span className="ml-2 text-xs bg-smarterpartner-purple text-white px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-500">
                Position {member.position}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {member.hasPaid ? (
              <span className="flex items-center text-smarterpartner-green text-sm">
                <Check className="w-4 h-4 mr-1" />
                Paid
              </span>
            ) : (
              <span className="text-gray-400 text-sm">Pending</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
