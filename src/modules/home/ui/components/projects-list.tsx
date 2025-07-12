"use client";

import { useUser } from "@clerk/nextjs";
import { Cpu } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";

export const ProjectsList = () => {
  const { user } = useUser();

  const t = useTranslations("Project");

  const trpc = useTRPC();
  const { data: projects } = useQuery(trpc.projects.getMany.queryOptions());

  if (!user) return null;

  return (
    <div className="w-full bg-white dark:bg-sidebar rounded-xl p-8 border flex flex-col gap-y-6 sm:gap-y-4">
      <h2 className="text-2xl font-semibold">
        {user?.firstName}&apos;{t("list.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {projects?.length === 0 && (
          <div className="col-span-full text-center">
            <p className="text-sm text-muted-foreground">{t("list.noFound")}</p>
          </div>
        )}
        {projects?.map((project) => (
          <Button
            key={project.id}
            variant="outline"
            className="font-normal h-auto justify-start w-full text-start p-4"
            asChild
          >
            <Link href={`/projects/${project.id}`}>
              <div className="flex items-center gap-x-4">
                <Cpu className="h-8 w-8 object-contain" />
                <div className="flex flex-col">
                  <h3 className="truncate font-medium">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(project.updatedAt, {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
