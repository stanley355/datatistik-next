import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeaderSheet } from "./header-sheet";
import { HeaderNavigation } from "./header-navigation";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        title="BERANDA"
        className={cn(
          buttonVariants({ variant: "link", size: "lg" }),
          "text-xl font-semibold",
        )}
      >
        DATATISTIK
      </Link>

      <HeaderSheet />
      <HeaderNavigation />
    </header>
  );
};
