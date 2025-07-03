"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "@/components/language-switch";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const t = useTranslations("Home");

  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "234234" }));

  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("后台开始运行");
      },
    })
  );

  return (
    <div>
      <LanguageSwitch />

      <Input value={value} onChange={(e) => setValue(e.target.value)} />

      <Button onClick={() => invoke.mutate({ value: value })}>invoke</Button>

      {t("title")}

      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
