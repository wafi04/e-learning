import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { DashboardKepalaSekolah } from "@/features/kepala-sekolah/DashboardKepalaSekolah";

export default function Page() {
  return (
    <>
      <HeaderDashboard title="Dashboard Kepala Sekolah" />
      <DashboardKepalaSekolah />
    </>
  );
}
