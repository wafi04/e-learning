import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import DashboardHomeWork from "@/features/siswa/DashboardHomeWork";

export default function Page() {
    return (
        <>            <HeaderDashboard title="Dashboard Tugas" />

            <DashboardHomeWork />
        </>
    )
}