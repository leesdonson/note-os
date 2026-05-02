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
    title: "New Note",
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
      <SidebarGroupLabel>Organize</SidebarGroupLabel>
      <SidebarMenu className="flex w-full flex-col gap-2">
        {navMain.map((item) => (
          <SidebarMenuItem
            className="border border-neutral-300  rounded"
            key={item.title}
          >
            <Link className="" href={item.url}>
              <SidebarMenuButton tooltip={item.title}>
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
