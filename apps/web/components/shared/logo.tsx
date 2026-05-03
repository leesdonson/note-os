import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Logo({ color }: { color?: string; isMobile?: boolean }) {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <div className="h-9 w-9 flex items-center justify-center rounded bg-linear-to-br from-purple-500 to-blue-500">
        <Sparkles color={color ? color : "white"} size={25} />
      </div>

      <span className={`text-xl font-bold tracking-tight`}>NoteOS</span>
    </Link>
  );
}
