"use client"
import { SidebarDashboard } from "@/components/layouts/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarDataSiswa } from "@/data";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarDashboard data={SidebarDataSiswa} />
            <main className="w-full p-6 space-y-2">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
