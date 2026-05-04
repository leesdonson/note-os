import { AppSidebar } from "@/components//dash/dash-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="p-1 overflow-hidden h-screen">
      <AppSidebar />
      <SidebarInset className="border border-blue-800 rounded-lg relative h-screen overflow-hidden">
        <header className="flex border-b border-neutral-800 backdrop-blur-2xl h-16 absolute top-0 z-40 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <p>|</p>

            <Breadcrumb>
              <BreadcrumbList>
                {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-lg">
                    Dashboard
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* main dashboard content */}
        <div className="overflow-y-auto p-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
