import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FileText, GraduationCap, LayoutDashboard, PenBox } from "lucide-react";
import { StarIcon, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// import {
//   PenBox,
//   LayoutDashboard,
//   FileText,
//   GraduationCap,
//   ChevronDown,
//   StarsIcon,
// } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="sensai logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain" />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>

              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="flex items-center gap-2" >
                <StarIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">

                  <PenBox className="h-4 w-4" />
                  Cover Letter
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={"/interview"} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>

            <UserButton 
              appearance={{
                avatarBox: "w-10 h-10",
                userButtonPopoverCard : "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
            }}
            afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
