"use client"
import { HashbrownProvider } from "@hashbrownai/react";
import { ReactNode } from "react";

export function Providers({children}:{children:ReactNode}) {
  return (
    <HashbrownProvider url={"api/generate"}>
      {children}
    </HashbrownProvider>
  )
}