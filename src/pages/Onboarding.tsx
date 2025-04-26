
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import OnboardingCard from '@/components/onboarding/OnboardingCard';

const onboardingSteps = [
  {
    title: "Welcome to SmarterPartner",
    description: "Join our community of smart savers and achieve your financial goals together.",
    image: "/lovable-uploads/a944be1f-b473-403c-bfde-5601a2ab7f8b.png"
  },
  {
    title: "Save Together",
    description: "Create or join Partner groups to save money with friends, family, or colleagues.",
    image: "/lovable-uploads/80351fa8-4074-493c-b249-bb0e08d72449.png"
  },
  {
    title: "Track Your Progress",
    description: "Monitor your savings progress and celebrate milestones with your group.",
    image: "/lovable-uploads/a944be1f-b473-403c-bfde-5601a2ab7f8b.png"
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/');
    }
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <OnboardingCard {...onboardingSteps[currentStep]} />
        </div>
      </div>
      
      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mb-4">
        {onboardingSteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentStep ? 'bg-smarterpartner-purple' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="p-6 flex flex-col gap-4">
        <Button
          onClick={handleNext}
          className="w-full py-6 text-lg font-semibold"
        >
          {currentStep === onboardingSteps.length - 1 ? "Let's Start Saving" : "Next"}
        </Button>
        
        {currentStep < onboardingSteps.length - 1 && (
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-smarterpartner-secondary-text"
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
