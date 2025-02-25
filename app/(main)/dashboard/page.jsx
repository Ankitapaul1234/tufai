import React from 'react'
import { getUserOnboardingStatus } from "@/actions/user";
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from "next/navigation";
import { getIndustryInsights } from '@/actions/dashboard';
// import DashboardView from "./_component/dashboard-view";
import DashboardView from './_components/dashboard-view';

const IndustryInsightsPage = async () => {
  
    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }
    return <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>;
  
}

export default IndustryInsightsPage;