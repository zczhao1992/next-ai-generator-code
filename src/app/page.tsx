"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "@/components/language-switch";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [value, setValue] = useState("");

  const t = useTranslations("Home");

  const trpc = useTRPC();

  const CreateProject = useMutation(
    trpc.projects.create.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: (data) => {
        router.push(`/projects/${data.id}`);
      },
    })
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <LanguageSwitch />

      <Input value={value} onChange={(e) => setValue(e.target.value)} />

      <Button
        disabled={CreateProject.isPending}
        onClick={() => CreateProject.mutate({ value: value })}
      >
        invoke
      </Button>

      {t("title")}
    </div>
  );
}
