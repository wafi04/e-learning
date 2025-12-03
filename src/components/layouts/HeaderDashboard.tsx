import React from "react"

interface HeaderDashboardProps {
    children?: React.ReactNode
    title?: string
    desc?: string
}
export function HeaderDashboard({ children, desc, title }: HeaderDashboardProps) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    {title ?? 'Dashboard '}
                </h1>
                <p className="text-muted-foreground">
                    {desc ?? 'Stastik Dasboard'}
                </p>
            </div>
            <div className="flex flex-row gap-2">
                {children}
            </div>
        </div>
    )
}