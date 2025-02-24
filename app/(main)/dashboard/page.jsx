import React from 'react'
import { getUserOnboardingStatus } from "@/actions/user";
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from "next/navigation";

const IndustryInsightsPage = async () => {
  
    const { isOnboarded } = await getUserOnboardingStatus();
    

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }
    return <div>IndustryInsightsPage</div>;
  
}

export default IndustryInsightsPage;