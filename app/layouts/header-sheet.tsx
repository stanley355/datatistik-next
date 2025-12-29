"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { LuX } from "react-icons/lu";
import { TbMenu } from "react-icons/tb";
import { ModeToggle } from "./mode-toggle";

export const HeaderSheet = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-lg" }),
          "sm:hidden",
        )}
      >
        <TbMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row items-center justify-between">
          <div>
            <SheetTitle>DATATISTIK</SheetTitle>
            <SheetDescription />
          </div>

          <SheetClose
            ref={closeRef}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <LuX />
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col px-2 gap-2 flex-1">
          <Link
            href="/"
            title="BERANDA"
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "justify-start ",
            )}
            onClick={() => closeRef.current?.click()}
          >
            BERANDA
          </Link>
          <Link
            href="/news"
            title="BERITA"
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "justify-start ",
            )}
            onClick={() => closeRef.current?.click()}
          >
            BERITA
          </Link>
        </div>

        <div className="p-4">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};
