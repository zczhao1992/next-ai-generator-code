"use client";

import { dark } from "@clerk/themes";

import { useCurrentTheme } from "@/hooks/use-current-theme";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const currentTheme = useCurrentTheme();

  return (
    <SignUp
      appearance={{
        elements: {
          cardBox: "border! shadow-none! border-lg!",
        },
        baseTheme: currentTheme === "dark" ? dark : undefined,
      }}
    />
  );
}
