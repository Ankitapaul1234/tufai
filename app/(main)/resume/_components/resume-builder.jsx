"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Save } from 'lucide-react';
import { Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const ResumeBuilder = ({ initialContent }) => {
    const [activeTab, setActiveTab] = useState("edit");
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <h1 className="font-bold gradient-title text-5xl md:text-6xl">
            ResumeBuilder
            </h1>

            <diV className="space-x-2">
                <Button variant="destructive">
                    <Save className="h-4 w-4" />
                    Save
                </Button>

                <Button >
                        <Download className="h-4 w-4" />Download PDF
                </Button>
            </diV>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
         <TabsList>
         <TabsTrigger value="edit">Form</TabsTrigger>
         <TabsTrigger value="preview">Markdown</TabsTrigger>
         </TabsList>
         <TabsContent value="edit">Make changes to your account here.</TabsContent>
         <TabsContent value="preview">Change your password here.</TabsContent>
        </Tabs>
    </div>
  )
}

export default ResumeBuilder
