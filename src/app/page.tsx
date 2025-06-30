"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "@/components/language-switch";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const t = useTranslations("Home");

  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "234234" }));

  return (
    <div>
      <LanguageSwitch />
      {/* <Button></Button> */}
      {t("title")}

      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
