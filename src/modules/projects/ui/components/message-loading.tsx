import { Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const ShimmerMessages = () => {
  const t = useTranslations("Message");

  const messages = [
    t("loading.Thinking"),
    t("loading.Loading"),
    t("loading.Generating"),
    t("loading.Analyzing"),
    t("loading.Building"),
    t("loading.Crafting"),
    t("loading.Optimizing"),
    t("loading.Adding"),
    t("loading.Ready"),
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-pulse">
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};

export const MessageLoading = () => {
  return (
    <div className="flex flex-col group px-2 pb-4">
      <div className="flex items-center gap-2 pl-2 mb-2">
        <Cpu className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium">Front End.AI</span>
      </div>
      <div className="pl-8.5 flex flex-col gap-y-4">
        <ShimmerMessages />
      </div>
    </div>
  );
};
