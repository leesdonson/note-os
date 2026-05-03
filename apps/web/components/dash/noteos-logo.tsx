"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function NoteOSLogo() {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <div className="h-9 w-9 flex items-center justify-center rounded bg-linear-to-br from-black to-blue-500">
        <Sparkles color={"white"} size={22} />
      </div>

      <span className={`text-xl truncate font-bold tracking-tight`}>
        NoteOS
      </span>
    </Link>
  );
}
