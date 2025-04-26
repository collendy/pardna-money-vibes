
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OnboardingCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const OnboardingCard = ({ title, description, image, className }: OnboardingCardProps) => {
  return (
    <Card className={cn("border-none shadow-none", className)}>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-6">
        <img 
          src={image} 
          alt={title} 
          className="w-64 h-64 object-contain mb-4"
        />
        <h2 className="text-2xl font-bold text-smarterpartner-purple">{title}</h2>
        <p className="text-smarterpartner-secondary-text text-lg">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default OnboardingCard;
