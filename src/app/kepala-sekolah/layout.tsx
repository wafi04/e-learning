"use client";
import { SidebarDashboard } from "@/components/layouts/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { dataKepalaSekolah } from "@/data";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarDashboard data={dataKepalaSekolah} />
      <main className="w-full p-6 space-y-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
