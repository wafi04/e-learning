import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { DashboardSiswa } from "@/features/siswa/DashboardSiswa";

export default function Page() {
    return (
        <>
            <HeaderDashboard title="Dashboard Siswa" desc="Dashboard Siswa" />
            <DashboardSiswa />
        </>
    )
}