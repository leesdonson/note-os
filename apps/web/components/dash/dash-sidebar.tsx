"use client";

import * as React from "react";
import { Folder, NotebookPen } from "lucide-react";

import { NavMain } from "@/components/dash/nav-main";
import { RecentlyAdded } from "@/components/dash/recently-added";
import { NavUser } from "@/components/dash/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NoteOSLogo } from "./noteos-logo";
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Folder1",
      url: "#",
      icon: Folder,
    },
    {
      name: "Folder2",
      url: "#",
      icon: Folder,
    },
    {
      name: "Note 1",
      url: "#",
      icon: NotebookPen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NoteOSLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <RecentlyAdded recentFiles={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
