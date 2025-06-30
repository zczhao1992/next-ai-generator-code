"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "@/components/language-switch";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <LanguageSwitch />
      {/* <Button></Button> */}
      {t("title")}
    </div>
  );
}
