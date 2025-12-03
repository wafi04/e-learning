import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { DashboardProfile } from "@/features/siswa/DashboardProfile";

export default function Page(){
    return (
        <>
        <HeaderDashboard title="Dashboard Siswa"/>
        <DashboardProfile />
        </>
    )
}