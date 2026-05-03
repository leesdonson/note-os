"use client";

import { FolderPlus, Pen } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const navMain = [
  {
    title: "Create Note",
    url: "/dashboard/new/note",
    icon: Pen,
  },
  {
    title: "New Folder",
    url: "/dashboard/new/folder",
    icon: FolderPlus,
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg font-semibold mb-4">
        Add New
      </SidebarGroupLabel>
      <SidebarMenu className="flex w-full flex-col gap-2">
        {navMain.map((item) => (
          <SidebarMenuItem
            className="flex items-center justify-start  "
            key={item.title}
          >
            <Link className="" href={item.url}>
              <SidebarMenuButton
                className="bg-linear-to-r text-md text-neutral-50 from-black to-blue-400 rounded"
                tooltip={item.title}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
