"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "@/components/language-switch";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const t = useTranslations("Home");

  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "234234" }));

  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("wdwad");
      },
    })
  );

  return (
    <div>
      <LanguageSwitch />

      <Button onClick={() => invoke.mutate({ text: "John" })}>invoke</Button>

      {t("title")}

      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
