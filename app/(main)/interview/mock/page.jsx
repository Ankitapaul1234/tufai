// import React from 'react'
// import { getAssessments } from "@/actions/interview";
// import StatsCards from "./_components/stats-cards";
// import PerformanceChart from "./_components/performace-chart";
// import QuizList from "./_components/quiz-list";

// const MockInterviewPage = () => {
    
//     return(
//     <div>
//         <div className="flex items-center justify-between mb-5">
//         <h1 className="text-6xl font-bold gradient-title">
//           Interview Preparation
//         </h1>
//       </div>
//       <div className="space-y-6">
//         <StatsCards assessments={assessments} />
//         <PerformanceChart assessments={assessments} />
//         <QuizList assessments={assessments} />
//       </div>
//     </div>
//     );
  
// }

// export default MockInterviewPage;



import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";


export default function MockInterviewPage() {
  return (
    <div className="container mx-auto space-y-4 py-6">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/interview">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
          <p className="text-muted-foreground">
            Test your knowledge with industry-specific questions
          </p>
        </div>
      </div>

      <Quiz />
    </div>
  );
}
