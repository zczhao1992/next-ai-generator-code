import { cn } from "@/lib/utils";
import { Languages, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { setLocale } from "@/i18n";
import { type Locale, locales } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitch() {
  const [ZH, EN] = locales;
  const locale = useLocale();

  console.log("dwawadawd", locale, locales, ZH, EN);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <Languages className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Languages className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale(ZH)}>
          简体中文{" "}
          <Check
            size={14}
            className={cn("ml-auto", locale !== ZH && "hidden")}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale(EN)}>
          English{" "}
          <Check
            size={14}
            className={cn("ml-auto", locale !== EN && "hidden")}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
