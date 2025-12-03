"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export function SidebarDashboard({
    data,
}: {
    data: {
        name: string;
        link: string;
        icon: ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >;
    }[];
}) {
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {data.map((item) => (
                                <SidebarMenuItem
                                    key={item.name}
                                    className={`${item.link === pathname ? "bg-primary" : "bg-secondary"} border-2 rounded-xl border-primary hover:bg-primary`}
                                >
                                    <SidebarMenuButton asChild>
                                        <Link href={item.link}>
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
