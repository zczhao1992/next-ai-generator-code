"use client";

import { Cpu } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Cpu className="h-13 w-13 hidden md:block" />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          {t("des")}
        </p>

        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  );
}
