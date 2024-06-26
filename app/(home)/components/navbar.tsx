"use client";

import { ModeToggle } from "@/components/shared/mode-toggle";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrolled();

  return (
    <div className={cn('z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6', 
      scrolled && 'border-b shadow-sm'
    )}>
      <Logo />
      <div className="flex items-center gap-x-2">
        <Button size={"sm"} variant={"ghost"}>
          Log in
        </Button>
        <Button size={"sm"}>Get Notion Free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};
