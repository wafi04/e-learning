"use client"
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import DashboardAttendance from "@/features/siswa/DashboardAttendance";

export default function Page() {
    return (
        <>
            <HeaderDashboard title="Dashboard Kehadiran" />
            <DashboardAttendance />
        </>
    )
}