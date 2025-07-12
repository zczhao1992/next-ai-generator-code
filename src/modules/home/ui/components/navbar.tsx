"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Cpu, Github } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/language-switch";
import { UserControl } from "@/components/user-control";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScroll();

  return (
    <nav
      className={cn(
        "p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent",
        scrolled && "bg-background border-border"
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="h-8 w-8 object-contain" />
          <span className="font-semibold text-lg">FrontEnd.AI</span>
        </Link>
        <SignedOut>
          <div className="flex items-center gap-5">
            <LanguageSwitch />
            <Link href="https://github.com/zczhao1992/next-ai-generator-code">
              <Github className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            </Link>
            <SignUpButton>
              <Button variant="outline" size="sm">
                Sign Up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-5">
            <LanguageSwitch />
            <Link href="https://github.com/zczhao1992/next-ai-generator-code">
              <Github className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            </Link>
            <UserControl showName />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
